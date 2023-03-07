import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { JwtStrategy } from './strategy';

// THẰNG MODULE TRONG MỖI FILE THÀNH PHẦN CÓ NHIỆM VỤ IMPORT 2 THẰNG 'CONTROLLER VÀ SERVICE'
// VÀO ĐÂY VÀ THẰNG NÀY SẺ ĐƯỢC IMPORT VÀO FILE APP.MODULE TỔNG
@Module({
  // IMPORT JwtModule VÀO ĐÂY ĐỂ SỬ DỤNG
  imports: [JwtModule.register({})],
  controllers: [AuthController],
  providers: [AuthService, JwtStrategy],
})
export class AuthModule {}
