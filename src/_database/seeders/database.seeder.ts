import { EvaluacionFactory } from './../factories/evaluacion.factory';
import { EntityManager } from '@mikro-orm/core';
import { Seeder } from '@mikro-orm/seeder';

import { SemestreFactory } from './../factories/semestre.factory';
import { EstudianteFactory } from './../factories/estudiante.factory';
import { AsignaturaFactory } from './../factories/asignatura.factory';

export class DatabaseSeeder extends Seeder {

  async run(em: EntityManager): Promise<void> {
    const asignaturas = new AsignaturaFactory(em).make(5);
    const estudiantes = new EstudianteFactory(em).make(15);
    const semestres = new SemestreFactory(em).make(3);
    const evaluaciones = new EvaluacionFactory(em).each(evaluacion => {
      evaluacion.idEstudiante = estudiantes[Math.floor(Math.random() * estudiantes.length)],
      evaluacion.idAsignatura = asignaturas[Math.floor(Math.random() * asignaturas.length)],
      evaluacion.idSemestre = semestres[Math.floor(Math.random() * semestres.length)]
    }).make(5);    
  }

}