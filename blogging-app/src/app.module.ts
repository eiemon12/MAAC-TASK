import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { AuthModule } from './auth/auth.module';
import { BlogModule } from './blog/blog.module';
import { UserModule } from './user/user.module';
import { CommentModule } from './comment/comment.module';
import { Tag } from './tag/tag.model';
import { BlogTag } from './tag/blog-tag.model';
import { Comment } from './comment/comment.model';
import { User } from './user/user.model';
import { Blog } from './blog/blog.model';

@Module({
  imports: [
    SequelizeModule.forRoot({
      dialect: 'mysql',
      host: '127.0.0.1',
      port: 3306,
      username: 'root',
      password: '',
      database: 'maac_blog',
      autoLoadModels: true,
      synchronize: true,
    }),
    SequelizeModule.forFeature([User, Blog, Tag, BlogTag, Comment]),
    AuthModule,
    BlogModule,
    UserModule,
    CommentModule,
  ],
})
export class AppModule {}
