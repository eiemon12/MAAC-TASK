import { Table, Column, Model, DataType, ForeignKey } from 'sequelize-typescript';
import { User } from '../user/user.model';
import { Blog } from '../blog/blog.model';

@Table
export class Comment extends Model {
  @Column({
    type: DataType.TEXT,
    allowNull: false,
  })
  content: string;

  @ForeignKey(() => User)
  @Column
  userId: number;

  @ForeignKey(() => Blog)
  @Column
  blogId: number;
}
