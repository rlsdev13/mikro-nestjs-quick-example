import { Module } from '@nestjs/common';
import { MikroOrmModule } from '@mikro-orm/nestjs';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { EstudianteModule } from './estudiante/estudiante.module';
import { SemestreModule } from './semestre/semestre.module';
import { AsignaturaModule } from './asignatura/asignatura.module';
import { EvaluacionModule } from './evaluacion/evaluacion.module';
import { OrmModule } from './orm/orm.module';

@Module({
  imports: [
    MikroOrmModule.forRoot(),
    EstudianteModule, 
    SemestreModule, 
    AsignaturaModule,  
    EvaluacionModule, OrmModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
