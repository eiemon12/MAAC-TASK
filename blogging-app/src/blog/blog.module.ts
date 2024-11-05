import { SequelizeModule } from '@nestjs/sequelize';
import { TagModule } from '../tag/tag.module';
import { BlogController } from './blog.controller';
import { Blog } from './blog.model';
import { BlogService } from './blog.service';
import { Module } from '@nestjs/common';

@Module({
  imports: [
    SequelizeModule.forFeature([Blog]),
    TagModule,
  ],
  providers: [BlogService],
  controllers: [BlogController],
})
export class BlogModule {}
