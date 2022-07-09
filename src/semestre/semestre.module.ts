import { Module } from '@nestjs/common';
import { SemestreService } from './semestre.service';
import { SemestreController } from './semestre.controller';
import { OrmModule } from 'src/orm/orm.module';

@Module({
    imports : [ 
        OrmModule
    ],
    controllers: [SemestreController],
    providers: [SemestreService]
})
export class SemestreModule {}
