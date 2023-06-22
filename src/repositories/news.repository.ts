import { Injectable } from '@nestjs/common';
import { CreateNewsInput } from 'src/models/news/dtos/create-news.input';
import { PrismaService } from 'src/models/users/services/prima.service';

@Injectable()
export class NewsRepository {
  constructor(private prisma: PrismaService) {}

  async create({ title, description, imageUrl }: CreateNewsInput){
    return await this.prisma.news.create({
      data: {
        title,
        description,
        imageUrl
      }
    });
  }

  async findAll() {
    return await this.prisma.news.findMany();
  }
}

