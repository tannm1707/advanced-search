import { BadRequestException, Injectable, NotFoundException } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Product } from "src/schemas/product.schema";
import { Model, Types } from "mongoose";
@Injectable()
export class ReportService {
  private readonly esIndex = "products";

  constructor(@InjectModel("Product") private readonly productModel: Model<Product>) {}

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
          fields: ["name", "description"], // Specify searchable fields
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
    console.log("Elasticsearch Query:", JSON.stringify(esQuery, null, 2));
    // return await this.esService.search({
    //   index: this.esIndex,
    //   body: {
    //     query: esQuery,
    //   },
    // });
  }

  async getTotalReport(category: string): Promise<number> {
    var filter = {};
    if (category) {
      filter = { category: category };
    }
    const count = await this.productModel.countDocuments(filter).exec();
    if (count === 0) {
      throw new NotFoundException("No products found in this category.");
    }
    return count;
  }

  async getAverageReport(): Promise<any> {
    const aggregationResult = await this.productModel.aggregate([
      {
        $group: {
          _id: "$category",
          averagePrice: { $avg: "$price" },
          productCount: { $sum: 1 },
        },
      },
      {
        $project: {
          category: "$_id",
          averagePrice: 1,
          productCount: 1,
          _id: 0,
        },
      },
    ]);

    return aggregationResult;
  }

  async getReportByPrice(category?: string): Promise<{ highest: Product; lowest: Product }> {
    const filter = category ? { category } : {};

    const [highest, lowest] = await Promise.all([
      this.productModel.findOne(filter).sort({ price: -1 }).exec(),
      this.productModel.findOne(filter).sort({ price: 1 }).exec(),
    ]);

    if (!highest || !lowest) {
      throw new NotFoundException('No products found matching the criteria.');
    }

    return { highest, lowest };
  }
}
