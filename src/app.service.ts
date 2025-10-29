import {Injectable} from '@nestjs/common';
import {InjectRepository} from "@nestjs/typeorm";
import {Message} from "./message.entity";
import {Repository} from "typeorm";

@Injectable()
export class AppService {
  constructor(@InjectRepository(Message)private readonly repository: Repository<Message> ) {}
  getHello(): string {
    return 'Hello World!';
  }
  echo(data: any): any{
    return {
      status: 'received',
      you_sent: data,
      length: data.length ? JSON.stringify(data) : null,
    }
  }
  async save(content: string) {
    const message = this.repository.create({
      content,
    });
    return  await this.repository.save(message);
  }
  async get() {
    return this.repository.find({
      take: 10,
    });
  }
}