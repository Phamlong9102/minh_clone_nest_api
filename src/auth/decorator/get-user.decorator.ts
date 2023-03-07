import { createParamDecorator, ExecutionContext } from '@nestjs/common';

// THẰNG NÀY SINH RA LÀ ĐỂ PHẦN ROUTES VIẾT TRÔNG NGẮN GỌN HƠN
export const GetUser = createParamDecorator(
  (data: unknown, ctx: ExecutionContext) => {
    const request: Express.Request = ctx.switchToHttp().getRequest();
    return request.user;
  },
);
