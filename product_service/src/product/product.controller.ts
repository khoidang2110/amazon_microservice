import { Controller, Get } from '@nestjs/common';
import { MessagePattern, Payload } from '@nestjs/microservices';
import { PrismaService } from 'src/prisma/prisma.service';

@Controller('product')
export class ProductController {

    constructor(
        private prismaService:PrismaService){}

//@Get()
@MessagePattern("get-all-product")
  async  getProduct(@Payload() data){
   
return await this.prismaService.product.findMany({
    where:{
        product_id:data.id
    }
});
    }
}
