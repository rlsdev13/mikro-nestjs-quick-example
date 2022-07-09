import { Controller, Delete, Get, Param } from '@nestjs/common';
import { SemestreService } from './semestre.service';

@Controller('semestre')
export class SemestreController {

    constructor ( private readonly semestreService : SemestreService){
    }

    @Get()
    getAll(){
        return this.semestreService.getAll();
    }

    @Get('/:id')
    getById(@Param('id') id : string ){
        return this.semestreService.getById( id );
    }

    @Delete('/:id')
    deleteById(@Param('id') id : string ){
        return this.semestreService.deleteById(id);
    }
}
