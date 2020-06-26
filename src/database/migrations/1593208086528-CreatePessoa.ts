import { MigrationInterface, QueryRunner } from "typeorm";

export default class CreatePessoa1593208086528 implements MigrationInterface {
  name = 'CreatePessoa1593208086528'

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`CREATE TABLE "diretor" ("id" SERIAL NOT NULL, "name" character varying NOT NULL, "email" character varying NOT NULL, "age" integer NOT NULL, "created_At" TIMESTAMP NOT NULL DEFAULT now(), "updated_At" TIMESTAMP NOT NULL DEFAULT now(), "setor" character varying NOT NULL, CONSTRAINT "PK_107dc6b273880bee9226d158334" PRIMARY KEY ("id"))`);
    await queryRunner.query(`CREATE TABLE "professor" ("id" SERIAL NOT NULL, "name" character varying NOT NULL, "email" character varying NOT NULL, "age" integer NOT NULL, "created_At" TIMESTAMP NOT NULL DEFAULT now(), "updated_At" TIMESTAMP NOT NULL DEFAULT now(), "materia" character varying NOT NULL, CONSTRAINT "PK_39a6c8f16280dc3bc3ffdc41e02" PRIMARY KEY ("id"))`);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`DROP TABLE "professor"`);
    await queryRunner.query(`DROP TABLE "diretor"`);
  }

}
