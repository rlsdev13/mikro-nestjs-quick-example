import { EntityRepository } from '@mikro-orm/core';
import { InjectRepository } from '@mikro-orm/nestjs';
import { Injectable, NotFoundException, UnauthorizedException } from '@nestjs/common';
import { Semestre } from './semestre.entity';
import { Evaluacion } from './../evaluacion/evaluacion.entity';

@Injectable()
export class SemestreService {
    constructor( 
        @InjectRepository(Semestre) private readonly semestreRepo: EntityRepository<Semestre>,
        @InjectRepository(Evaluacion) private readonly evaluacionRepo : EntityRepository<Evaluacion>,
    ){
    }

    async getAll(){
        return await this.semestreRepo.find({},{
            fields : [
                'nombre',
                'evaluaciones.idEstudiante',
                'evaluaciones.idEstudiante.nombre',
                'evaluaciones.idEstudiante.apellidoPaterno',            
                'evaluaciones.idSemestre',
                'evaluaciones.idSemestre.fechaInicio',
                'evaluaciones.idSemestre.fechaFin',
                'evaluaciones.idAsignatura',
                'evaluaciones.idAsignatura.nombre',
                'evaluaciones.idAsignatura.creditosMinimos',
            ]
        });
    }
    
    async getById( id : string ){
        return await this.semestreRepo.findOne( id , {
            populate : [
                'evaluaciones.idAsignatura',
                'evaluaciones.idEstudiante'            
            ]
        });
    }

    async deleteById(id : string ) : Promise<Semestre>{
        const semestre = await this.semestreRepo.findOne( id );
        if(!semestre){
            throw new NotFoundException;
        }

        const existOnEvaluacion = await this.evaluacionRepo.findOne({ idSemestre : new Object(id) });
        if(existOnEvaluacion){
            throw new UnauthorizedException(`El campo ${id} esta relacionado con evaluación.`);
        }

        await this.semestreRepo.removeAndFlush(semestre);
        return semestre;
    }

}
