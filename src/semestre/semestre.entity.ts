import { Collection, Entity, OneToMany, PrimaryKey, Property } from '@mikro-orm/core';
import { Evaluacion } from '../evaluacion/evaluacion.entity';

@Entity()
export class Semestre{

    @PrimaryKey({ type : 'uuid', defaultRaw : 'uuid_generate_v4()'})
    uuid! : string;

    @Property({ type : 'string' })
    nombre : string;

    @Property()
    fechaInicio : Date;

    @Property()
    fechaFin : Date;

    @Property()
    createdAt = new Date();

    @Property({ onUpdate : () => new Date() })
    updatedAt = new Date();

    @OneToMany( () => Evaluacion, evaluacion => evaluacion.idSemestre )
    evaluaciones = new Collection<Evaluacion>(this);
}