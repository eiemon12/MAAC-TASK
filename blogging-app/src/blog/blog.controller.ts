import { Controller, Post, Get, Patch, Delete, Param, Body, Req, UseGuards } from '@nestjs/common';
import { BlogService } from './blog.service';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';

@Controller('blogs')
export class BlogController {
  constructor(private readonly blogService: BlogService) {}

  @UseGuards(JwtAuthGuard)
  @Post("create")
  createBlog(@Body() blogData: { title: string; content: string; tags: string[] }, @Req() req) {
    return this.blogService.createBlog(blogData, req.user.userId);
  }

  @Get("getAll")
  getAllBlogs() {
    return this.blogService.getAllBlogs();
  }

  @UseGuards(JwtAuthGuard)
  @Patch(':id')
  updateBlog(@Param('id') blogId: number, @Body() blogData: any, @Req() req) {
    return this.blogService.updateBlog(blogId, blogData, req.user.userId);
  }

  @UseGuards(JwtAuthGuard)
  @Delete(':id')
  deleteBlog(@Param('id') blogId: number, @Req() req) {
    return this.blogService.deleteBlog(blogId, req.user.userId);
  }
}
