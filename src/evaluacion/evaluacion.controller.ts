import { Controller, Delete, Get, Param } from '@nestjs/common';
import { EvaluacionService } from './evaluacion.service';

@Controller('evaluacion')
export class EvaluacionController {

    constructor( private readonly evaluacionSeervice : EvaluacionService ){}

    @Get()
    getAll(){
        return this.evaluacionSeervice.getAll();
    }

    @Get('/:id')
    getById(@Param('id') id : string ){
        return this.evaluacionSeervice.getById( id );
    }

    @Delete('/:id')
    deleteById(@Param('id') id : string){
        return this.evaluacionSeervice.deleteById(id);
    }
}
