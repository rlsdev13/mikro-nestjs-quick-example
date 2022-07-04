import { Factory } from '@mikro-orm/seeder';
import Faker from 'faker';
import { Asignatura } from '../../asignatura/asignatura.entity';

export class AsignaturaFactory extends Factory<Asignatura>{
    model = Asignatura;

    protected definition( faker : typeof Faker ): Partial<Asignatura> {
        return{
            nombre : faker.commerce.department(),
            codigo : faker.finance.currencyName(),
            creditosMinimos : 60,
        }
    }
}