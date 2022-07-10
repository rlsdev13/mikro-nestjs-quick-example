import { Collection, Entity, OneToMany, PrimaryKey, Property } from '@mikro-orm/core';
import { ObjectId } from '@mikro-orm/mongodb';
import { Evaluacion } from '../evaluacion/evaluacion.entity';

@Entity()
export class Semestre{

    @PrimaryKey({ type : ObjectId })
    _id! : ObjectId;

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