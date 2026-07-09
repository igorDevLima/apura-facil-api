import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { ClassEntity } from './class.entity';

@Module({
  imports: [TypeOrmModule.forFeature([ClassEntity])],
  /*
   *   controllers: [UserController],
   *   exports: [UserService],
   *   providers: [UserService, ...handlers],
   */
})
export class ClassModule {}
