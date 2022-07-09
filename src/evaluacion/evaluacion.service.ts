import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@mikro-orm/nestjs';
import { EntityRepository } from '@mikro-orm/core';

import { Evaluacion } from './evaluacion.entity';

@Injectable()
export class EvaluacionService {
    constructor( 
        @InjectRepository(Evaluacion) private readonly evaluacionRepo : EntityRepository<Evaluacion>, 
    ){}

    async getAll() : Promise<Evaluacion[]> {
        return await this.evaluacionRepo.find({}, {
            fields : [
                'nota',
                'idAsignatura',
                {
                    idAsignatura : [
                        'nombre'
                    ]
                },
                'idEstudiante',
                {
                    idEstudiante : [ 
                        'nombre',
                        'apellidoPaterno',
                        'apellidoMaterno'
                    ] 
                },
                'idSemestre',
                {
                    idSemestre : [
                        'nombre',
                        'fechaFin',
                        'fechaFin',
                    ]
                }

            ]
        } );
    }

    async getById( id : string ) : Promise<Evaluacion>{
        return await this.evaluacionRepo.findOne( id , { populate : [ 'idAsignatura', 'idSemestre', 'idEstudiante' ] }  )
    }

    async deleteById( id : string ): Promise<Evaluacion>{
        const evaluacion = await this.evaluacionRepo.findOne( id );
        if(!evaluacion){
            throw new NotFoundException;
        }
        await this.evaluacionRepo.removeAndFlush(evaluacion);
        return evaluacion;
    }
}
