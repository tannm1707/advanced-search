import { Injectable } from '@nestjs/common';
import { ElasticsearchService } from '@nestjs/elasticsearch';

@Injectable()
export class ElasticsearchServiceWrapper {
  private readonly index: string;

  constructor(private readonly esService: ElasticsearchService) {
    this.index = 'products';
  }

  async search(params: { index: string; body: any }) {

    try {
      const { index, body } = params;
      console.log('Executing Elasticsearch Query:', JSON.stringify(body, null, 2));
      const response = await this.esService.search({
        index,
        body,
      });
      return response.hits.hits.map((hit) => hit._source);
    } catch (error) {
      console.error('Elasticsearch Search Error:', error.meta?.body || error);
      throw error;
    }
  }
  async indexDocument(id: string, document: any) {
    try {
      await this.esService.index({
        index: this.index,
        id,
        document: document,
      });
    } catch (error) {
      console.error('Elasticsearch Indexing Error:', error.meta?.body || error);
      throw error;
    }
  }

  async updateDocument(id: string, document: any) {
    try {
      await this.esService.update({
        index: this.index,
        id,
        doc: document,
      });
    } catch (error) {
      console.error('Elasticsearch Indexing Error:', error.meta?.body || error);
      throw error;
    }
  }

  async deleteDocument(id: string) {
    try {
      await this.esService.delete({
        index: this.index,
        id,
      });
    } catch (error) {
      console.error('Elasticsearch Deletion Error:', error.meta?.body || error);
      throw error;
    }
  }

  async createIndex(index: string, mappings: any): Promise<void> {
    try {
      const exists = await this.esService.indices.exists({ index });

      if (!exists) {
        await this.esService.indices.create({
          index,
          body: {
            mappings,
          },
        });
        console.log(`Index '${index}' created.`);
      } else {
        console.log(`Index '${index}' already exists.`);
      }
    } catch (error) {
      console.error('Error creating index:', error);
      throw new Error(`Error creating index: ${error.message}`);
    }
  }
  async bulkIndex(documents: any[]) {
    try {
      const body = documents.flatMap(doc => {
        const { _id, ...docWithoutId } = doc;
        
        return [
          { index: { _index: this.index, _id: _id } }, 
          docWithoutId,
        ];
      });
      const bulkResponse = await this.esService.bulk({
        refresh: true,
        body,
      });
      if (bulkResponse.errors) {
        const errorItems = bulkResponse.items.filter(item => item.index?.error);
        throw new Error(`Error indexing documents: ${JSON.stringify(errorItems)}`);
      }

      console.log('Bulk indexing response:', bulkResponse);
      return bulkResponse;
    } catch (error) {
      console.error('Elasticsearch Bulk Indexing Error:', error.meta?.body || error);
      throw error;
    }
  }
}
