import { Module } from '@nestjs/common';
import { QuotesService} from './service/user.service';
import { QuotesController } from './controller/user.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { QuotesEntity } from './models/user.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([QuotesEntity])
  ],
  providers: [QuotesService],
  controllers: [QuotesController]
})
export class UserModule {}
