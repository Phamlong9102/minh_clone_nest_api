import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Put,
} from '@nestjs/common';
import { EditUserDto } from 'src/auth/dto';
import { GetUser } from '../auth/decorator';
import { JwtGuard } from '../guard';
import { CartUser } from './dto';
import { UserService } from './user.service';

// KHIÊN PHẢI CÓ ACCESS TOKEN GỬI LÊN MỚI PASS MỚI CÓ DATA TRẢ VỀ
// @UseGuards(JwtGuard)
@Controller('users')
export class UserController {
  constructor(private userService: UserService) {}

  // GET ALL USER
  @Get('all')
  getAllUser() {
    return this.userService.getAllUser();
  }

  // GET DETAIL DATA OF USER
  @Get(':id')
  getUserById(@Param('id') id: string) {
    return this.userService.getUserById(id);
  }

  // DELETE USER
  @Delete('delete/:id')
  deleteUserById(@Param('id') id: string) {
    return this.userService.deleteUserById(id);
  }

  // EDIT USER
  @Patch('edit/:id')
  editUserById(@Param('id') id: string, @Body() editUserDto: EditUserDto) {
    return this.userService.editUserById(id, editUserDto);
  }

  // ADD DATA PRODUCT (WHEN USER LOGOUT THEN SAVE CART TO DATABASE)
  @Patch('cart/:id')
  updateCartUser(@Param('id') id: string, @Body() cartUser: any) {
    return this.userService.updateCartUser(id, cartUser);
  }
}
