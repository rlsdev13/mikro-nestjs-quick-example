import { Factory, Faker } from '@mikro-orm/seeder';
import { Estudiante } from './../../estudiante/estudiante.entity';

export class EstudianteFactory extends Factory<Estudiante>{
    model = Estudiante;

    protected definition( faker : Faker ): Partial<Estudiante> {
        faker.locale = 'es_MX';
        return{
            nombre : faker.name.findName(),
            apellidoPaterno : faker.name.lastName(),
            apellidoMaterno : faker.name.lastName(),
            correo : faker.internet.email(),           
        }
    }
}