import { IsAlphanumeric, IsDecimal, IsNotEmpty, IsNumber, isNumber, IsString, Min } from "class-validator";

export class CreateProductDto {
    @IsString()
    @IsNotEmpty()
    name:string;

    @IsString()
    @IsNotEmpty()
    description:string;

    @IsNumber()
    @IsNotEmpty()
    @Min(0)
    price:number;

    @IsString()
    @IsNotEmpty()
    category:string;
}
