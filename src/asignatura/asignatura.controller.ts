import { Controller, Get, Param } from '@nestjs/common';
import { AsignaturaService } from './asignatura.service';

@Controller('asignatura')
export class AsignaturaController {

    constructor( private readonly asignaturaService : AsignaturaService){
    }

    @Get()
    getAll(){
        return this.asignaturaService.getAll();
    }

    @Get('/:id')
    getById(@Param('id') id : string ){
        return this.asignaturaService.getById( id );
    }
}
