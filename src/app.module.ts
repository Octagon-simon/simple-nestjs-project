import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { CatsController } from './controllers/cats.controller';

@Module({
  imports: [UsersModule],
  controllers: [AppController, CatsController],
  providers: [AppService],
})
export class AppModule {}
