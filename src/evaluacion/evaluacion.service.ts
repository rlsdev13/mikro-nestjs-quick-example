import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@mikro-orm/nestjs';
import { EntityRepository } from '@mikro-orm/core';

import { Evaluacion } from './evaluacion.entity';

@Injectable()
export class EvaluacionService {
    constructor( 
        @InjectRepository(Evaluacion) private readonly evaluacionRepo : EntityRepository<Evaluacion>, 
    ){}

    async getAll() : Promise<Evaluacion[]> {
        return await this.evaluacionRepo.findAll();
    }
}
