import { Table, Column, Model, DataType, HasMany } from 'sequelize-typescript';
import { Blog } from '../blog/blog.model';

@Table
export class User extends Model {
  @Column({
    type: DataType.STRING,
    unique: true,
    allowNull: false,
  })
  username: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  password: string;

  @HasMany(() => Blog)
  blogs: Blog[];
}
