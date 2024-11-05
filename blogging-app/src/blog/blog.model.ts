import { Table, Column, Model, DataType, ForeignKey, BelongsToMany } from 'sequelize-typescript';
import { User } from '../user/user.model';
import { Tag } from '../tag/tag.model';
import { BlogTag } from '../tag/blog-tag.model';

@Table
export class Blog extends Model {
  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  title: string;

  @Column({
    type: DataType.TEXT,
    allowNull: false,
  })
  content: string;

  @ForeignKey(() => User)
  @Column
  authorId: number;

  @BelongsToMany(() => Tag, () => BlogTag)
  tags: Tag[];
}
