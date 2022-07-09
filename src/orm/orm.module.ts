import { MikroOrmModule } from '@mikro-orm/nestjs';
import { Module } from '@nestjs/common';
import { Asignatura } from '../asignatura/asignatura.entity';
import { Estudiante } from '../estudiante/estudiante.entity';
import { Evaluacion } from '../evaluacion/evaluacion.entity';
import { Semestre } from '../semestre/semestre.entity';

@Module({
    imports : [
        MikroOrmModule.forRoot(),
        MikroOrmModule.forFeature([
            Asignatura,
            Estudiante,
            Evaluacion,
            Semestre
        ])
    ],
    exports : [
        MikroOrmModule
    ]
})
export class OrmModule {}
