import { Entity, PrimaryKey, Property } from '@mikro-orm/core';

@Entity()
export class Semestre{

    @PrimaryKey({ type : 'uuid', defaultRaw : 'uuid_generate_v4()'})
    uuid! : string;

    @Property()
    fechaInicio : Date;

    @Property()
    fechaFin : Date;

    @Property()
    createdAt = new Date();

    @Property({ onUpdate : () => new Date() })
    updatedAt = new Date();
}