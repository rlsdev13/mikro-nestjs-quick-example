import { Module } from '@nestjs/common';
import { AsignaturaService } from './asignatura.service';
import { AsignaturaController } from './asignatura.controller';
import { OrmModule } from '../orm/orm.module';

@Module({
    imports : [ 
        OrmModule
    ],
    providers: [AsignaturaService],
    controllers: [AsignaturaController],
})
export class AsignaturaModule {}
