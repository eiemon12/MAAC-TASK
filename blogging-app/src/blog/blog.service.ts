import { Injectable, UnauthorizedException } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Blog } from './blog.model';
import { Tag } from '../tag/tag.model';

@Injectable()
export class BlogService {
  constructor(
    @InjectModel(Blog) private readonly blogModel: typeof Blog,
    @InjectModel(Tag) private readonly tagModel: typeof Tag,
  ) {}

  async createBlog(blogData: { title: string; content: string; tags: string[] }, userId: number) {
    const blog = await this.blogModel.create({ ...blogData, authorId: userId });

    const tags = await Promise.all(
      blogData.tags.map(async (tagName) => {
        const [tag] = await this.tagModel.findOrCreate({ where: { name: tagName } });
        return tag;
      }),
    );

    await blog.$set('tags', tags);
    return blog;
  }

  async getAllBlogs() {
    return await this.blogModel.findAll();
  }

  async updateBlog(blogId: number, blogData: any, userId: number) {
    const blog = await this.blogModel.findByPk(blogId);
    if (blog.authorId !== userId) throw new UnauthorizedException();
    return await blog.update(blogData);
  }

  async deleteBlog(blogId: number, userId: number) {
    const blog = await this.blogModel.findByPk(blogId);
    if (blog.authorId !== userId) throw new UnauthorizedException();
    await blog.destroy();
    return { deleted: true };
  }
}
