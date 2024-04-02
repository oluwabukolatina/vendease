import { Module } from '@nestjs/common';
import { databaseProvider } from "./database.provider";
console.log(databaseProvider, 'databaseProvider')
@Module({
  providers: [...databaseProvider],
  exports: [...databaseProvider],
})
export class DatabaseModule { }
