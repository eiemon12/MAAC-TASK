import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Comment } from './comment.model';

@Injectable()
export class CommentService {
  constructor(@InjectModel(Comment) private readonly commentModel: typeof Comment) {}

  async createComment(content: string, blogId: number, userId: number) {
    return this.commentModel.create({ content, blogId, userId });
  }
}
