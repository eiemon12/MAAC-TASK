import { SequelizeModule } from "@nestjs/sequelize";
import { Tag } from "./tag.model";
import { Module } from "@nestjs/common";

@Module({
    imports: [SequelizeModule.forFeature([Tag])],
    exports: [SequelizeModule],
  })
  export class TagModule {}
  