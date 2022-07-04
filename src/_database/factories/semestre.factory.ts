import { Factory } from '@mikro-orm/seeder';
import Faker from 'faker';
import { Semestre } from '../../semestre/semestre.entity';

export class SemestreFactory extends Factory<Semestre>{
    model = Semestre;

    protected definition( faker: typeof Faker ): Partial<Semestre> {
        return{
            fechaInicio : faker.date.past(),
            fechaFin : faker.date.future(),   
        }        
    }
}