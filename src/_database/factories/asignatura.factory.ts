import { Factory, Faker } from '@mikro-orm/seeder';
import { Asignatura } from '../../asignatura/asignatura.entity';

export class AsignaturaFactory extends Factory<Asignatura>{
    model = Asignatura;

    protected definition( faker : Faker ): Partial<Asignatura> {
        faker.locale = 'es_MX';
        return{
            nombre : faker.commerce.department(),
            codigo : faker.finance.currencyName(),
            creditosMinimos : 60,
        }
    }
}