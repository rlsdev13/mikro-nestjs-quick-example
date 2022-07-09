import { Collection, Entity, OneToMany, PrimaryKey, Property, Unique } from '@mikro-orm/core';
import { Evaluacion } from '../evaluacion/evaluacion.entity';

@Entity()
export class Estudiante{

    @PrimaryKey({ type: 'uuid', defaultRaw: 'uuid_generate_v4()' })
    uuid! : string;

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