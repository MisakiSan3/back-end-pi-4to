import { Global, Module } from '@nestjs/common';
import { LogInController } from './logIn.controller';
import { LogInService } from './logIn.service';
import { User } from 'src/modules/user/user/entities/user.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserService } from 'src/modules/user/user/user.service';
import { JwtModule } from '@nestjs/jwt';
import { jwtConstants } from '../jwt.constants';
import { PassportModule } from '@nestjs/passport';
import { JwtStrategy } from '../jwt.strategy';


@Global()
@Module({
  imports: [TypeOrmModule.forFeature([User]),
JwtModule.register({
  secret:jwtConstants.secret,
  signOptions: {expiresIn:'1h'},
}),
PassportModule
],
  controllers: [LogInController],
  providers: [LogInService, UserService,  JwtStrategy],
  exports: [LogInService]
 
})
export class LoginModule {}
