import { EntityRepository } from '@mikro-orm/core';
import { InjectRepository } from '@mikro-orm/nestjs';
import { Injectable, NotFoundException, UnauthorizedException } from '@nestjs/common';
import { Asignatura } from './asignatura.entity';
import { AsignaturaDto } from './dtos/asignatura.dto';
import { Evaluacion } from '../evaluacion/evaluacion.entity';

@Injectable()
export class AsignaturaService {
    constructor(
        @InjectRepository(Asignatura) private readonly asignaturaRepo : EntityRepository<Asignatura>,
        @InjectRepository(Evaluacion) private readonly evaluacionRepo : EntityRepository<Evaluacion>
    ){}

    async getAll() : Promise<Asignatura[]> {
        return await this.asignaturaRepo.find({},{  
            fields : [//cargar todas las relaciones de la tabla evaluacion
                'nombre',
                'codigo',  
                'evaluaciones.idAsignatura',
                'evaluaciones.idAsignatura.nombre',
                'evaluaciones.idSemestre',
                'evaluaciones.idSemestre.fechaInicio',
                'evaluaciones.idSemestre.fechaFin',
                'evaluaciones.idEstudiante',  
                'evaluaciones.idEstudiante.nombre',
            ]
        });
    }

    async create( dataAsignatura : AsignaturaDto ) : Promise<Asignatura>{
        const asignatura = await this.asignaturaRepo.create(dataAsignatura);
        this.asignaturaRepo.persistAndFlush(asignatura);
        return asignatura;
    }

    async getById( id : string ) : Promise<Asignatura>{
        return await this.asignaturaRepo.findOne( id ,{  
            fields : [
                'nombre',
                'codigo',  
                'evaluaciones.idAsignatura',
                'evaluaciones.idAsignatura.nombre',
                'evaluaciones.idSemestre',
                'evaluaciones.idSemestre.fechaInicio',
                'evaluaciones.idSemestre.fechaFin',
                'evaluaciones.idEstudiante',  
                'evaluaciones.idEstudiante.nombre',
            ]
        });
    }

    async deleteById( id : string ) : Promise<Asignatura>{
        const asignatura = await this.asignaturaRepo.findOne( id );
        if(!asignatura){
            throw new NotFoundException;
        }

        const existOnEvaluacion = await this.evaluacionRepo.findOne({ idAsignatura : id });
        if(existOnEvaluacion){
            throw new UnauthorizedException(`El campo ${id} esta relacionado con evaluacion`);
        }

        await this.asignaturaRepo.removeAndFlush(asignatura);
        
        return asignatura;
    }

}
