import { Evaluacion } from './evaluacion.entity';
import { MikroOrmModule } from '@mikro-orm/nestjs';
import { Module } from '@nestjs/common';
import { EvaluacionController } from './evaluacion.controller';
import { EvaluacionService } from './evaluacion.service';

@Module({
  imports : [ MikroOrmModule.forFeature([ Evaluacion ]) ],
  controllers: [EvaluacionController],
  providers: [EvaluacionService]
})
export class EvaluacionModule {}
