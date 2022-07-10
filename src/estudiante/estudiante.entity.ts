import { Collection, Entity, OneToMany, PrimaryKey, Property, Unique } from '@mikro-orm/core';
import { ObjectId } from '@mikro-orm/mongodb';
import { Evaluacion } from '../evaluacion/evaluacion.entity';

@Entity()
export class Estudiante{

    @PrimaryKey({ type: ObjectId })
    _id! : ObjectId;

    @Property()
    nombre : string;

    @Property()
    apellidoPaterno : string;

    @Property()
    apellidoMaterno : string;

    @Property()
    @Unique()
    correo : string;

    @OneToMany( () => Evaluacion, evaluacion => evaluacion.idEstudiante )
    evaluaciones = new Collection<Evaluacion>(this);

    @Property()
    createdAt = new Date();

    @Property({ onUpdate : () =>  new Date() })
    updatedAt = new Date();
}