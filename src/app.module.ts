import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TasksModule } from './tasks/tasks.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { createTypeOrmOptions } from './config/database.config';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: [`.env`],
    }),
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: createTypeOrmOptions,
    }),
    TasksModule,
    AuthModule,
    UsersModule,
  ],
})
export class AppModule {}
