import { Evaluacion } from './../evaluacion/evaluacion.entity';
import { Entity, Property, PrimaryKey, Unique, OneToMany, Collection} from '@mikro-orm/core';

@Entity()
export class Asignatura{
    
    @PrimaryKey({ type: 'uuid', defaultRaw: 'uuid_generate_v4()' })
    uuid! : string;

    @Property()
    nombre : string;

    @Property()
    @Unique()
    codigo : string;

    @Property()
    creditosMinimos : number;

    @Property()
    createdAt = new Date();

    @Property({ onUpdate : () => new Date() })
    updatedAt = new Date();

    @OneToMany( () => Evaluacion , evaluacion => evaluacion.idAsignatura )
    evaluaciones = new Collection<Evaluacion>(this);
}