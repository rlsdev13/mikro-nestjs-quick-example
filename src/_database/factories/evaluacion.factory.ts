import { Factory, Faker } from '@mikro-orm/seeder';
import { Evaluacion } from '../../evaluacion/evaluacion.entity';

export class EvaluacionFactory extends Factory<Evaluacion>{
    model = Evaluacion;

    protected definition( faker : Faker ): Partial<Evaluacion> {
        return{
            nota : faker.datatype.number({ min : 10 , max : 100 }).toString()
        }
    }
}