import { InjectRepository } from '@mikro-orm/nestjs';
import { EntityRepository } from '@mikro-orm/postgresql';
import { Injectable, NotFoundException, UnauthorizedException } from '@nestjs/common';
import { Evaluacion } from '../evaluacion/evaluacion.entity';
import { Estudiante } from './estudiante.entity';

@Injectable()
export class EstudianteService {
    constructor(
        @InjectRepository(Estudiante) private readonly estudianteRepo : EntityRepository<Estudiante>,
        @InjectRepository(Evaluacion) private readonly evaluacionRepo : EntityRepository<Evaluacion>
    ){
    }

    async getAll() : Promise<Estudiante[]> {
        return await this.estudianteRepo.find({},{
            fields : [
                'nombre',
                'evaluaciones.idEstudiante',
                'evaluaciones.idAsignatura',
                'evaluaciones.idAsignatura.nombre',
                'evaluaciones.idSemestre',
                'evaluaciones.idSemestre.nombre'
            ]
        } );
    }

    async getById( id : string ) : Promise<Estudiante> {
        return await this.estudianteRepo.findOne( id ,{
            populate : [
                'evaluaciones.idSemestre',
                'evaluaciones.idAsignatura'
            ],
        });
    }

    async deleteById( id : string ) : Promise<Estudiante>{
        const estudiante = await this.estudianteRepo.findOne(id);
        if(!estudiante){
            throw new NotFoundException;
        }

        const existOnEvaluacion = await this.evaluacionRepo.findOne({ idEstudiante : id });
        if(existOnEvaluacion){
            throw new UnauthorizedException(`El campo ${id} esta relacionado con evaluacion`)
        }
        await this.estudianteRepo.removeAndFlush(estudiante);
        return estudiante;
    }
}
