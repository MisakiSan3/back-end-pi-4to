import { Module } from '@nestjs/common';
import { LogInController } from './logIn.controller';
import { LogInService } from './logIn.service';
import { User } from 'src/modules/user/user/entities/user.entity';
import { TypeOrmModule } from '@nestjs/typeorm';


@Module({
  imports: [TypeOrmModule.forFeature([User])],
  controllers: [LogInController],
  providers: [LogInService]
})
export class LoginModule {}
