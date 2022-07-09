import { Module } from '@nestjs/common';
import { EstudianteController } from './estudiante.controller';
import { EstudianteService } from './estudiante.service';
import { OrmModule } from '../orm/orm.module';

@Module({
    imports : [ 
        OrmModule
    ],
    controllers: [EstudianteController],
    providers: [EstudianteService],
})
export class EstudianteModule {}
