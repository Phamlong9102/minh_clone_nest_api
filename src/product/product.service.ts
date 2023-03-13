import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { ProductDto } from './dto';

@Injectable()
export class ProductService {
  constructor(private prisma: PrismaService) {}

  // GET ALL PRODUCT
  getAllProduct() {
    return this.prisma.product.findMany();
  }

  // GET PRODUCT BY ID
  getProductById(id: string) {
    return this.prisma.product.findUnique({
      where: { id },
    });
  }

  // SEARCH PRODUCTS BY NAME
  searchByName(classify: string) {
    return this.prisma.product.findMany({
      where: {
        classify: {
          contains: classify,
        },
      },
    });
  }

  // ADD NEW PRODUCT
  async addNewProduct(dto: ProductDto) {
    try {
      await this.prisma.product.create({
        data: {
          product_name: dto.product_name,
          price: dto.price,
          quantity: dto.quantity,
          size: dto.size,
          color: dto.color,
          description: dto.description,
          category: dto.category,
          classify: dto.classify,
          image_url: dto.image_url,
          comment: dto.comment,
          new_arrival: dto.new_arrival,
        },
      });

      // RETURN TEXT
      return 'THÊM SẢN PHẨM MỚI THÀNH CÔNG';
    } catch (err) {
      return 'LỖI SERVER';
    }
  }
}
