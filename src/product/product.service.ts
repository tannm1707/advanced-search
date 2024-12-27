import { 
  BadRequestException, 
  Injectable, 
  NotFoundException 
} from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Product } from 'src/schemas/product.schema';
import { Model, Types } from 'mongoose';
import { GetProductDto, SortBy } from './dto/get-product.dto';
import { ElasticsearchServiceWrapper } from 'src/modules/elasticsearch/elasticsearch.service';
@Injectable()
export class ProductService {
  private readonly esIndex = 'products';

  constructor(
    @InjectModel('Product') private readonly productModel: Model<Product>,
    private readonly esService: ElasticsearchServiceWrapper,
  ) {}

  async create(createProductDto: CreateProductDto) {
    const createdProduct = await this.productModel.create(createProductDto);

    const createdProductObj = createdProduct.toObject({
      transform: (doc, ret) => {
        delete ret._id; // Delete the _id field
        return ret;
      },
    });
    await this.esService.indexDocument(
      createdProduct._id.toString(),
      createdProductObj,
    );

    return createdProduct;
  }

  async findAll(query: GetProductDto) {
    const {
      page,
      limit,
      name,
      category,
      minPrice,
      maxPrice,
      sortBy = SortBy.NAME,
      sortOrder = 'desc',
    } = query;

    const skip = (page - 1) * limit;

    const filter: any = {};
    if (name) {
      filter.name = { $regex: name, $options: 'i' };
    }
    if (category) {
      filter.category = { $regex: category, $options: 'i' };
    }
    if (minPrice) {
      filter.price = { ...filter.price, $gte: minPrice };
    }
    if (maxPrice) {
      filter.price = { ...filter.price, $lte: maxPrice };
    }

    const sortOrderValue = sortOrder === 'desc' ? -1 : 1;

    const [items, total] = await Promise.all([
      this.productModel
        .find(filter)
        .skip(skip)
        .limit(limit)
        .sort({ [sortBy]: sortOrderValue })
        .exec(),
      this.productModel.countDocuments(filter).exec(),
    ]);

    return {
      items,
      total,
      page,
      limit,
      totalPages: Math.ceil(total / limit),
    };
  }

  async search(term: string, category?: string, minPrice?: number, maxPrice?: number) {
  const esQuery: any = {
    bool: {
      must: [],
      filter: [],
    },
  };
  if (term) {
    esQuery.bool.must.push({
      multi_match: {
        query: term,
        fields: ['name', 'description'], // Specify searchable fields
      },
    });
  }
  if (category) {
    esQuery.bool.filter.push({
      term: { category }, // Use term query for exact matches
    });
  }
  if (minPrice) {
    esQuery.bool.filter.push({
      range: { price: { gte: minPrice } },
    });
  }
  if (maxPrice) {
    esQuery.bool.filter.push({
      range: { price: { lte: maxPrice } },
    });
  }
  if (esQuery.bool.must.length === 0) {
    delete esQuery.bool.must;
  }
  if (esQuery.bool.filter.length === 0) {
    delete esQuery.bool.filter;
  }
  console.log('Elasticsearch Query:', JSON.stringify(esQuery, null, 2));
  return await this.esService.search({
    index: this.esIndex,
    body: {
      query: esQuery,
    },
  });

}

  async findById(id: string): Promise<Product> {
    const product = await this.productModel.findById(id).exec();
    if (!product) {
      throw new NotFoundException(`Product with id ${id} not found`);
    }
    return product;
  }

  async update(id: string, updateProductDto: UpdateProductDto): Promise<Product> {
    const updatedProduct = await this.productModel.findByIdAndUpdate(
      id,
      updateProductDto,
      {
        new: true,
        runValidators: true,
      },
    ).exec();

    if (!updatedProduct) {
      throw new NotFoundException(`Product with ID ${id} not found`);
    }
    const updatedProductObj = updatedProduct.toObject({
      transform: (doc, ret) => {
        delete ret._id;
        return ret;
      },
    });
    await this.esService.updateDocument(
      id,
      updatedProductObj,
    );

    return updatedProduct;
  }

  async remove(id: string) {
    if (!Types.ObjectId.isValid(id)) {
      throw new BadRequestException('Invalid product ID format');
    }

    const result = await this.productModel.findByIdAndDelete(id).exec();
    if (!result) {
      throw new NotFoundException(`Product with ID ${id} not found`);
    }

    // Remove from Elasticsearch
    await this.esService.deleteDocument(id);

    return `Successfully deleting product with ID ${id}`;
  }

  async bulkCreate(products: CreateProductDto[]): Promise<any> {
    try {
      const createdProducts = await this.productModel.insertMany(products);
      const docsForElasticSearch = createdProducts.map(product => ({
        _id: product._id.toString(),
        name: product.name,
        description: product.description,
        category: product.category,
        price: product.price,
      }));
      const bulkResponse = await this.esService.bulkIndex(docsForElasticSearch);
      return { "products": createdProducts};
    } catch (error) {
      throw new Error('Error while creating and indexing products: ' + error.message);
    }
  }
}
