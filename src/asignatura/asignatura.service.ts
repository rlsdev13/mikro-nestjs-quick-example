import { EntityRepository } from '@mikro-orm/core';
import { InjectRepository } from '@mikro-orm/nestjs';
import { Injectable } from '@nestjs/common';

import { Asignatura } from './asignatura.entity';

@Injectable()
export class AsignaturaService {
    constructor(
        @InjectRepository(Asignatura) private readonly asignaturaRepo : EntityRepository<Asignatura>,
    ){}

    async getAll() : Promise<Asignatura[]> {
        return await this.asignaturaRepo.find({},{ populate : ['evaluaciones.idEstudiante'] });
    }

    async getById( id : string ) : Promise<Asignatura>{
        return await this.asignaturaRepo.findOne( id ,{ populate : ['evaluaciones'] });
    }
}
