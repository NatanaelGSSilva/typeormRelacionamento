import { MigrationInterface, QueryRunner } from "typeorm";

export default class CreateIdentifier1593217511865 implements MigrationInterface {
  name = 'CreateIdentifier1593217511865'

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`CREATE TABLE "diretor" ("setor" character varying NOT NULL, "responsabilidade" character varying NOT NULL, "identificationId" SERIAL NOT NULL, "identificationName" character varying NOT NULL, "identificationEmail" character varying NOT NULL, "identificationDatanascimento" TIMESTAMP NOT NULL, "identificationCreated_at" TIMESTAMP NOT NULL DEFAULT now(), "identificationUpdated_at" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "PK_45ca943d2b1ae7ed6ae0b8c927a" PRIMARY KEY ("identificationId"))`);
    await queryRunner.query(`CREATE TABLE "professor" ("materia" character varying NOT NULL, "sala" character varying NOT NULL, "identificationId" SERIAL NOT NULL, "identificationName" character varying NOT NULL, "identificationEmail" character varying NOT NULL, "identificationDatanascimento" TIMESTAMP NOT NULL, "identificationCreated_at" TIMESTAMP NOT NULL DEFAULT now(), "identificationUpdated_at" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "PK_667af6b9d5106378cea1a336254" PRIMARY KEY ("identificationId"))`);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`DROP TABLE "professor"`);
    await queryRunner.query(`DROP TABLE "diretor"`);
  }

}
