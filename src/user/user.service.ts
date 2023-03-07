import { Injectable } from '@nestjs/common';
import { EditUserDto } from 'src/auth/dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { CartUser } from './dto';

// CONTROLLER XỬ LÍ LOGIC CỦA USER
@Injectable()
export class UserService {
  constructor(private prisma: PrismaService) {}
  // GET ALL USER
  getAllUser() {
    return this.prisma.user.findMany();
  }

  // GET USER BY ID
  async getUserById(id: string) {
    try {
      const user = await this.prisma.user.findUnique({ where: { id } });
      return user;
    } catch (err) {
      return 'KHÔNG TÌM THẤY ID CỦA USER HOẶC LỖI SERVER';
    }
  }

  // DELETE USER BY ID
  async deleteUserById(id: string) {
    try {
      await this.prisma.user.delete({ where: { id } });
      return 'XÓA USER THÀNH CÔNG';
    } catch (err) {
      return 'KHÔNG TÌM THẤY ID CỦA USER HOẶC LỖI SERVER';
    }
  }

  // EDIT USER BY ID
  async editUserById(id: string, editUserDto: EditUserDto) {
    try {
      await this.prisma.user.update({
        where: { id },
        data: editUserDto,
      });
      return 'CHỈNH SỬA THÔNG TIN USER THÀNH CÔNG';
    } catch (err) {
      ('KHÔNG TÌM THẤY ID CỦA USER HOẶC LỖI SERVER');
    }
  }

  // ADD CART USER
  async updateCartUser(id: string, cartUser: []) {
    try {
      return await this.prisma.user.update({
        where: { id },
        data: {
          cart: cartUser,
        },
      });
    } catch (err) {
      return `KHONG THE UPDATE THONG TIN SAN PHAM`;
    }
  }
}
