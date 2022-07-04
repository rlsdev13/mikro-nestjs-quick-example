import { Asignatura } from './asignatura.entity';
import { Module } from '@nestjs/common';
import { MikroOrmModule } from '@mikro-orm/nestjs';
import { AsignaturaService } from './asignatura.service';
import { AsignaturaController } from './asignatura.controller';

@Module({
    imports : [ MikroOrmModule.forFeature([ Asignatura ]) ],
    providers: [AsignaturaService],
    controllers: [AsignaturaController],
})
export class AsignaturaModule {}
