import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SubjectsModule } from './modules/academic/subjects/subjects.module';
import { TeachersModule } from './modules/academic/teachers/teachers.module';
import { EventsModule } from './modules/events/events/events.module';
import { CategoriaEventosModule } from './modules/events/categoria_eventos/categoria_eventos.module';
import { UserModule } from './modules/user/user/user.module';
import { ConfigModule } from './config/config.module';
import { ConfigService } from './config/config.service';
import { Configuration } from './config/config.keys';
import { TypeOrmModule } from '@nestjs/typeorm';
import { join } from 'path';
import { TeacherModule } from './modules/teacher/teacher.module';
import { LoginModule } from './modules/auth/logIn/login.module';


@Module({
  imports: [ConfigModule,SubjectsModule, TeachersModule, EventsModule, CategoriaEventosModule,LoginModule, UserModule,
    TypeOrmModule.forRootAsync(
      {
        imports: [ConfigModule],
        inject: [ConfigService],
        async useFactory(config:ConfigService){
            return {
                type: 'postgres',
                username: config.get(Configuration.USERNAME),
                password:config.get(Configuration.PASSWORD),
                host:config.get(Configuration.HOST),
                port: 5432,
                database:config.get(Configuration.DATABASE),
                entities: [join(__dirname, '**', '*.entity.{ts,js}')],
                migrations: [__dirname + '/migrations/*.{.ts,.js}'],
                synchronize: true,
            }
        }
    }
    ),
    TeacherModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {
  static port: number | string;
    constructor(private readonly _configService: ConfigService){
        AppModule.port = this._configService.get(Configuration['PORT'])
    }
}
