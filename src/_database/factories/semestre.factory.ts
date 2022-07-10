import { Factory, Faker } from '@mikro-orm/seeder';
import { Semestre } from '../../semestre/semestre.entity';

export class SemestreFactory extends Factory<Semestre>{
    model = Semestre;

    protected definition( faker: Faker ): Partial<Semestre> {
        faker.locale = 'es_MX';
        return{
            nombre : `semestre ${faker.datatype.number({ min : 1, max : 10})}`,
            fechaInicio : faker.date.past(),
            fechaFin : faker.date.future(),   
        }        
    }
}