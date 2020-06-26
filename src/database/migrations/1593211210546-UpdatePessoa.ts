import { MigrationInterface, QueryRunner } from "typeorm";

export default class UpdatePessoa1593211210546 implements MigrationInterface {
  name = 'UpdatePessoa1593211210546'

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`ALTER TABLE "diretor" RENAME COLUMN "age" TO "dataNascimento"`);
    await queryRunner.query(`ALTER TABLE "professor" RENAME COLUMN "age" TO "dataNascimento"`);
    await queryRunner.query(`ALTER TABLE "diretor" DROP COLUMN "dataNascimento"`);
    await queryRunner.query(`ALTER TABLE "diretor" ADD "dataNascimento" TIMESTAMP NOT NULL`);
    await queryRunner.query(`ALTER TABLE "professor" DROP COLUMN "dataNascimento"`);
    await queryRunner.query(`ALTER TABLE "professor" ADD "dataNascimento" TIMESTAMP NOT NULL`);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`ALTER TABLE "professor" DROP COLUMN "dataNascimento"`);
    await queryRunner.query(`ALTER TABLE "professor" ADD "dataNascimento" integer NOT NULL`);
    await queryRunner.query(`ALTER TABLE "diretor" DROP COLUMN "dataNascimento"`);
    await queryRunner.query(`ALTER TABLE "diretor" ADD "dataNascimento" integer NOT NULL`);
    await queryRunner.query(`ALTER TABLE "professor" RENAME COLUMN "dataNascimento" TO "age"`);
    await queryRunner.query(`ALTER TABLE "diretor" RENAME COLUMN "dataNascimento" TO "age"`);
  }

}
