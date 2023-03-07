import {
  Body,
  Controller,
  Get,
  Param,
  Patch,
  Post,
  Query,
} from '@nestjs/common';
import { Router } from 'express';
import { ProductDto } from './dto';
import { ProductService } from './product.service';

// ROUTES CỦA PRODUCT
@Controller('products')
export class ProductController {
  constructor(private productService: ProductService) {}

  // ADD NEW PRODUCT
  @Post('add/new')
  addNewProduct(@Body() dto: ProductDto) {
    return this.productService.addNewProduct(dto);
  }

  // GET ALL PRODUCT
  @Get('all')
  getAllProduct() {
    return this.productService.getAllProduct();
  }

  // GET PRODUCT BY ID
  @Get(':id')
  getProductById(@Param('id') id: string) {
    return this.productService.getProductById(id);
  }

  // SEARCH BY NAME
  @Get('search')
  searchByName(@Query() product_name: string): string {
    return this.searchByName(product_name);
  }
}
