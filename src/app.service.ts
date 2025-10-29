import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }
  echo(data: any): any{
    return {
      status: 'received',
      you_sent: data,
      length: data ? JSON.stringify(data) : null,
    }
  }
}