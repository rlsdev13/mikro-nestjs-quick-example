import { Entity, PrimaryKey, Property, ManyToOne } from '@mikro-orm/core';
import { Semestre } from './../semestre/semestre.entity';
import { Estudiante } from './../estudiante/estudiante.entity';
import { Asignatura } from './../asignatura/asignatura.entity';

@Entity()
export class Evaluacion{

    @PrimaryKey({ type : 'uuid', defaultRaw : 'uuid_generate_v4()' })
    uuid! : string;
    
    @Property()
    nota : string;
    
    @ManyToOne()
    idAsignatura : Asignatura;

    @ManyToOne()
    idEstudiante : Estudiante;

    @ManyToOne()
    idSemestre : Semestre;

    @Property()
    createdAt = new Date();
    
    @Property({ onUpdate : () => new Date() })
    updatedAt = new Date();
}