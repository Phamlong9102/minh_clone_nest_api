import { Body, Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthDtoLogin, AuthDtoRegister } from './dto';

// THẰNG CONTROLLER NÀY CÓ TÁC DỤNG NHƯ THẰNG ROUTES TRONG EXPRESS - NÓ ĐỊNH NGHĨA ĐƯỜNG
// DẪN CỦA API
@Controller('auth')
export class AuthController {
  // VỀ TÌM HIỂU VỀ THẰNG CONSTRUCTOR VÀ THẰNG PRIVATE
  constructor(private authService: AuthService) {}

  // HÀM ĐĂNG KÍ
  @Post('register')
  register(@Body() dto: AuthDtoRegister) {
    // NHẬN DATA TỪ REQUEST BODY
    return this.authService.register(dto);
  }

  // HÀM ĐĂNG NHẬP
  @Post('login')
  login(@Body() dto: AuthDtoLogin) {
    return this.authService.login(dto);
  }
}
