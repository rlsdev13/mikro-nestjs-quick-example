import { EstudianteService } from './estudiante.service';
import { Controller, Delete, Get, Param } from '@nestjs/common';

@Controller('estudiante')
export class EstudianteController {

    constructor( private readonly estudianteService : EstudianteService ){}

    @Get()
    getAll(){
        return this.estudianteService.getAll();    
    }

    @Get('/:id')
    getById(@Param('id') id : string ){
        return this.estudianteService.getById( id );
    }

    @Delete('/:id')
    deleteById(@Param('id') id : string ){
        return this.estudianteService.deleteById(id);
    }
}
