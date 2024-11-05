import { Table, Column, Model, ForeignKey } from 'sequelize-typescript';
import { Blog } from '../blog/blog.model';
import { Tag } from './tag.model';

@Table
export class BlogTag extends Model {
  @ForeignKey(() => Blog)
  @Column
  blogId: number;

  @ForeignKey(() => Tag)
  @Column
  tagId: number;
}
