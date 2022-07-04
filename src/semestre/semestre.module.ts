import { Semestre } from './semestre.entity';
import { MikroOrmModule } from '@mikro-orm/nestjs';
import { Module } from '@nestjs/common';

@Module({
    imports : [ MikroOrmModule.forFeature([ Semestre ]) ]
})
export class SemestreModule {}
