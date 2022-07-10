import { Entity, PrimaryKey, Property, ManyToOne } from '@mikro-orm/core';
import { ObjectId } from '@mikro-orm/mongodb';
import { Semestre } from './../semestre/semestre.entity';
import { Estudiante } from './../estudiante/estudiante.entity';
import { Asignatura } from './../asignatura/asignatura.entity';

@Entity()
export class Evaluacion{

    @PrimaryKey({ type : ObjectId })
    _id! : string;
    
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