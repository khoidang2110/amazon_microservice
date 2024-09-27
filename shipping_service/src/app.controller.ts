import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { EventPattern, Payload } from '@nestjs/microservices';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}
// event pattern ko trả về
  @EventPattern("SHIP_PRODUCT_NAME")
  order(@Payload() data) {
    return this.appService.shipping(data);
  }
}
