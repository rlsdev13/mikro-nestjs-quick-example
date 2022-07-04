import { Factory } from '@mikro-orm/seeder';
import Faker from 'faker';
import { Evaluacion } from '../../evaluacion/evaluacion.entity';

export class EvaluacionFactory extends Factory<Evaluacion>{
    model = Evaluacion;

    protected definition( faker : typeof Faker ): Partial<Evaluacion> {
        return{
            nota : faker.datatype.number({ min : 10 , max : 100 }).toString()
        }
    }
}