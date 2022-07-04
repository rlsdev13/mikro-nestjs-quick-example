import { Migration } from '@mikro-orm/migrations';

export class Migration20220704034047 extends Migration {

  async up(): Promise<void> {
    this.addSql('create table "semestre" ("uuid" uuid not null default uuid_generate_v4(), "fecha_inicio" timestamptz(0) not null, "fecha_fin" timestamptz(0) not null, "created_at" timestamptz(0) not null, "updated_at" timestamptz(0) not null);');
    this.addSql('alter table "semestre" add constraint "semestre_pkey" primary key ("uuid");');

    this.addSql('create table "estudiante" ("uuid" uuid not null default uuid_generate_v4(), "nombre" varchar(255) not null, "apellido_paterno" varchar(255) not null, "apellido_materno" varchar(255) not null, "correo" varchar(255) not null, "created_at" timestamptz(0) not null, "updated_at" timestamptz(0) not null);');
    this.addSql('alter table "estudiante" add constraint "estudiante_correo_unique" unique ("correo");');
    this.addSql('alter table "estudiante" add constraint "estudiante_pkey" primary key ("uuid");');

    this.addSql('create table "asignatura" ("uuid" uuid not null default uuid_generate_v4(), "nombre" varchar(255) not null, "codigo" varchar(255) not null, "creditos_minimos" int not null, "created_at" timestamptz(0) not null, "updated_at" timestamptz(0) not null);');
    this.addSql('alter table "asignatura" add constraint "asignatura_codigo_unique" unique ("codigo");');
    this.addSql('alter table "asignatura" add constraint "asignatura_pkey" primary key ("uuid");');

    this.addSql('create table "evaluacion" ("uuid" uuid not null default uuid_generate_v4(), "nota" varchar(255) not null, "id_asignatura_uuid" uuid not null, "id_estudiante_uuid" uuid not null, "id_semestre_uuid" uuid not null, "created_at" timestamptz(0) not null, "updated_at" timestamptz(0) not null);');
    this.addSql('alter table "evaluacion" add constraint "evaluacion_pkey" primary key ("uuid");');

    this.addSql('alter table "evaluacion" add constraint "evaluacion_id_asignatura_uuid_foreign" foreign key ("id_asignatura_uuid") references "asignatura" ("uuid") on update cascade;');
    this.addSql('alter table "evaluacion" add constraint "evaluacion_id_estudiante_uuid_foreign" foreign key ("id_estudiante_uuid") references "estudiante" ("uuid") on update cascade;');
    this.addSql('alter table "evaluacion" add constraint "evaluacion_id_semestre_uuid_foreign" foreign key ("id_semestre_uuid") references "semestre" ("uuid") on update cascade;');
  }

  async down(): Promise<void> {
    this.addSql('alter table "evaluacion" drop constraint "evaluacion_id_semestre_uuid_foreign";');

    this.addSql('alter table "evaluacion" drop constraint "evaluacion_id_estudiante_uuid_foreign";');

    this.addSql('alter table "evaluacion" drop constraint "evaluacion_id_asignatura_uuid_foreign";');

    this.addSql('drop table if exists "semestre" cascade;');

    this.addSql('drop table if exists "estudiante" cascade;');

    this.addSql('drop table if exists "asignatura" cascade;');

    this.addSql('drop table if exists "evaluacion" cascade;');
  }

}
