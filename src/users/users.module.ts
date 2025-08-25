import { Module } from '@nestjs/common';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports:[TypeOrmModule.forRoot({
    type:"postgres",
    host:"localhost",
    port:5432,
    username:"postgres",
    password:"123456",
    database:"user_db",
    entities:[],
    synchronize:true,
  })
  
  ],
  controllers: [UsersController],
  providers: [UsersService]
})
export class UsersModule {}
