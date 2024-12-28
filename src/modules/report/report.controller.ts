import { Controller, Get, Post, Body, Patch, Param, Delete, Query, Res } from '@nestjs/common';
import { ReportService } from './report.service';
import { generateApiPath } from 'src/utils';
import { ApiOperation, ApiQuery, ApiResponse, ApiTags } from '@nestjs/swagger';
import { GetReportDto, GetTotalReportDto } from './dto/get-report.dto';
import { Response } from "express";
@ApiTags("report")
@Controller(generateApiPath("report"))
export class ReportController {
  constructor(private readonly reportService: ReportService) {}

  @Get('total')
  @ApiQuery({ name: 'category', required: false, description: 'Category of the product' })
  async total(@Query() query: GetTotalReportDto,@Res() res: Response) {
    const count =  await this.reportService.getTotalReport(
      query.category
    );
    var data = {};
    if(query.category){
      data['category'] = query.category;
    }
    data['count'] = count;
    res.json({data});
  }

  @Get('average')
  async average(@Res() res: Response) {
    const data =  await this.reportService.getAverageReport(
    );
    res.json({data});
  }

  @Get('price')
  @ApiQuery({ name: 'category', required: false, description: 'Optional category to filter products', })
  async getReportByPrice(@Query() query: GetTotalReportDto,@Res() res: Response) {
    const result =  await this.reportService.getReportByPrice(
      query.category
    );
    var data = {};
    if(query.category){
      data['category'] = query.category;
    }
    data['products'] = result;
    res.json({data});
  }
}
