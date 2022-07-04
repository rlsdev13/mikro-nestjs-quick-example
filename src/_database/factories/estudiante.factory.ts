import { Factory } from '@mikro-orm/seeder';
import Faker from 'faker';
import { Estudiante } from './../../estudiante/estudiante.entity';

export class EstudianteFactory extends Factory<Estudiante>{
    model = Estudiante;

    protected definition( faker : typeof Faker ): Partial<Estudiante> {
        return{
            nombre : faker.name.findName(),
            apellidoPaterno : faker.name.lastName(),
            apellidoMaterno : faker.name.lastName(),
            correo : faker.internet.email(),           
        }
    }
}