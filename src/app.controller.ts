import {Body, Controller, Get, Post} from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
  @Post()
  echo(@Body() data: any){
    return this.appService.echo(data);
  }
  @Post('save')
  async save(@Body('message') message: string) {
    return this.appService.save(message);
  }

  @Get('messages')
  async findAll() {
    return this.appService.get();
  }
}
