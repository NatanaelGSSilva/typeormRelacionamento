import { MigrationInterface, QueryRunner } from "typeorm";

export default class CreatePessoaHeranca1593215497940 implements MigrationInterface {
  name = 'CreatePessoaHeranca1593215497940'

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`CREATE TABLE "pessoa" ("id" SERIAL NOT NULL, "name" character varying NOT NULL, "email" character varying NOT NULL, "dataNascimento" TIMESTAMP NOT NULL, "created_At" TIMESTAMP NOT NULL DEFAULT now(), "updated_At" TIMESTAMP NOT NULL DEFAULT now(), "setor" character varying, "responsabilidade" character varying, "materia" character varying, "sala" character varying, "type" character varying NOT NULL, CONSTRAINT "PK_bb879ac36994545a5a917a09ba5" PRIMARY KEY ("id"))`);
    await queryRunner.query(`CREATE INDEX "IDX_a85b0b8e99ef7d2de3d636fc22" ON "pessoa" ("type") `);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`DROP INDEX "IDX_a85b0b8e99ef7d2de3d636fc22"`);
    await queryRunner.query(`DROP TABLE "pessoa"`);
  }

}
