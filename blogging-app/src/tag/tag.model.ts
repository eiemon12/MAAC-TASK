import { Table, Column, Model, DataType, BelongsToMany } from 'sequelize-typescript';
import { Blog } from '../blog/blog.model';
import { BlogTag } from './blog-tag.model';

@Table
export class Tag extends Model {
  @Column({
    type: DataType.STRING,
    unique: true,
    allowNull: false,
  })
  name: string;

  @BelongsToMany(() => Blog, () => BlogTag)
  blogs: Blog[];
}
