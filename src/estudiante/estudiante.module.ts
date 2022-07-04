import { Estudiante } from './estudiante.entity';
import { Module } from '@nestjs/common';
import { MikroOrmModule } from '@mikro-orm/nestjs';

@Module({
    imports : [ MikroOrmModule.forFeature([ Estudiante ]) ],
})
export class EstudianteModule {}
