import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { AsignaturaService } from './asignatura.service';
import { AsignaturaDto } from './dtos/asignatura.dto';

@Controller('asignatura')
export class AsignaturaController {

    constructor( private readonly asignaturaService : AsignaturaService){
    }

    @Get()
    getAll(){
        return this.asignaturaService.getAll();
    }

    @Post()
    create(@Body() dataAsignatura : AsignaturaDto ){
        return this.asignaturaService.create(dataAsignatura);
    }

    @Get('/:id')
    getById(@Param('id') id : string ){
        return this.asignaturaService.getById( id );
    }
}
