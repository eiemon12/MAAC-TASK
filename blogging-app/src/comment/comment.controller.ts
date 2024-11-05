import { Controller, Post, Body, Param, Req, UseGuards } from '@nestjs/common';
import { CommentService } from './comment.service';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';

@Controller('blogs/:blogId/comments')
export class CommentController {
  constructor(private readonly commentService: CommentService) {}

  @UseGuards(JwtAuthGuard)
  @Post()
  createComment(
    @Param('blogId') blogId: number,
    @Body() commentData: { content: string },
    @Req() req,
  ) {
    return this.commentService.createComment(commentData.content, blogId, req.user.userId);
  }
}
