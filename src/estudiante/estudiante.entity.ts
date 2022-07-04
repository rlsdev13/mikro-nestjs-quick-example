import { Entity, PrimaryKey, Property, Unique } from '@mikro-orm/core';

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

    @Property()
    createdAt = new Date();

    @Property({ onUpdate : () =>  new Date() })
    updatedAt = new Date();
}