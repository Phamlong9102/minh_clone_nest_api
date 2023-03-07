import {
  IsArray,
  IsInt,
  IsNotEmpty,
  IsNumber,
  IsObject,
  IsString,
  IsBoolean,
} from 'class-validator';

export class ProductDto {
  @IsString()
  @IsNotEmpty()
  product_name: string;

  @IsNumber()
  @IsNotEmpty()
  price: number;

  @IsInt()
  @IsNumber()
  @IsNotEmpty()
  quantity: number;

  @IsArray()
  @IsNotEmpty()
  size: [];

  @IsArray()
  @IsNotEmpty()
  color: [];

  @IsObject()
  @IsNotEmpty()
  description: object;

  @IsString()
  @IsNotEmpty()
  category: string;

  @IsString()
  @IsNotEmpty()
  classify: string;

  @IsObject()
  @IsNotEmpty()
  image_url: object;

  @IsArray()
  @IsNotEmpty()
  comment: [];

  @IsBoolean()
  @IsNotEmpty()
  new_arrival: boolean;
}
