import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { DatabaseModule } from './database/database.module';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SharedModule } from "./compoent/shared.module";

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    DatabaseModule,
    // SequelizeModule.forRoot({
    //   dialect: 'postgres',
    //   host: 'castor.db.elephantsql.com',
    //   port: 5432,
    //   username: 'spwqaygy',
    //   password: 'gZG7Qr4KpBS5mrS9BpxQgp8JAupZeEfm',
    //   database: 'spwqaygy',
    //   autoLoadModels: true,
    //   synchronize: true,
    // }),
    // CharacterModule,
    SharedModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
