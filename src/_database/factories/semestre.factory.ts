import { Factory, Faker } from '@mikro-orm/seeder';
import { Semestre } from '../../semestre/semestre.entity';

export class SemestreFactory extends Factory<Semestre>{
    model = Semestre;

    protected definition( faker: Faker ): Partial<Semestre> {
        return{
            fechaInicio : faker.date.past(),
            fechaFin : faker.date.future(),   
        }        
    }
}