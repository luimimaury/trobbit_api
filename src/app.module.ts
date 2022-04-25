import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CatsModule } from './cats/cats.module';
import { ImagesModule } from './images/images.module';


@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: './src/env/.env.development'
    }),
    CatsModule,
    MongooseModule.forRoot(process.env.mongodb_connection),
    ImagesModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
