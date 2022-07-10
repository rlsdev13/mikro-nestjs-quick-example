import { Entity, Property, PrimaryKey, Unique, OneToMany, Collection} from '@mikro-orm/core';
import { ObjectId } from '@mikro-orm/mongodb';
import { Evaluacion } from './../evaluacion/evaluacion.entity';

@Entity()
export class Asignatura{
    
    @PrimaryKey({ type: ObjectId })
    _id! : ObjectId;

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