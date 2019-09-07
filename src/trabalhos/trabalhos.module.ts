import { Module } from '@nestjs/common';
import { TrabalhosController } from './trabalhos/trabalhos.controller';
import { TrabalhosService } from './trabalhos/trabalhos.service';

@Module({
  controllers: [TrabalhosController],
  providers: [TrabalhosService]
})
export class TrabalhosModule {}
