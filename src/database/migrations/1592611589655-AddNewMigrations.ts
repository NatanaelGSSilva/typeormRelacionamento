import { MigrationInterface, QueryRunner } from "typeorm";

export default class AddNewMigrations1592611589655 implements MigrationInterface {
  name = 'AddNewMigrations1592611589655'

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`CREATE TABLE "content" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "description" character varying NOT NULL, "linkContent" character varying NOT NULL, "lessonId" uuid, CONSTRAINT "REL_0b349f6b8ca7f05eed39ffb956" UNIQUE ("lessonId"), CONSTRAINT "PK_6a2083913f3647b44f205204e36" PRIMARY KEY ("id"))`);
    await queryRunner.query(`CREATE TABLE "lesson" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "description" character varying NOT NULL, "created_At" TIMESTAMP NOT NULL DEFAULT now(), "updated_At" TIMESTAMP NOT NULL DEFAULT now(), "classeId" uuid, CONSTRAINT "PK_0ef25918f0237e68696dee455bd" PRIMARY KEY ("id"))`);
    await queryRunner.query(`CREATE TABLE "class" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "name" character varying(100) NOT NULL, "duration" integer NOT NULL, "site" character varying, "text" character varying, "created_At" TIMESTAMP NOT NULL DEFAULT now(), "updated_At" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "UQ_574dd394846fb85d495d0f77dfd" UNIQUE ("name"), CONSTRAINT "PK_0b9024d21bdfba8b1bd1c300eae" PRIMARY KEY ("id"))`);
    await queryRunner.query(`CREATE TABLE "student" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "name" character varying NOT NULL, "key" integer NOT NULL, "created_At" TIMESTAMP NOT NULL DEFAULT now(), "updated_At" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "PK_3d8016e1cb58429474a3c041904" PRIMARY KEY ("id"))`);
    await queryRunner.query(`CREATE TABLE "student_classes_class" ("studentId" uuid NOT NULL, "classId" uuid NOT NULL, CONSTRAINT "PK_9f2c655a5feb7cff342af016c8e" PRIMARY KEY ("studentId", "classId"))`);
    await queryRunner.query(`CREATE INDEX "IDX_4e224193a4e2c8e1b28afa74e9" ON "student_classes_class" ("studentId") `);
    await queryRunner.query(`CREATE INDEX "IDX_3d4b9aa106e0113abd39f06182" ON "student_classes_class" ("classId") `);
    await queryRunner.query(`ALTER TABLE "content" ADD CONSTRAINT "FK_0b349f6b8ca7f05eed39ffb956d" FOREIGN KEY ("lessonId") REFERENCES "lesson"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    await queryRunner.query(`ALTER TABLE "lesson" ADD CONSTRAINT "FK_f8129e3c7eacda851f01f054f96" FOREIGN KEY ("classeId") REFERENCES "class"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    await queryRunner.query(`ALTER TABLE "student_classes_class" ADD CONSTRAINT "FK_4e224193a4e2c8e1b28afa74e9d" FOREIGN KEY ("studentId") REFERENCES "student"("id") ON DELETE CASCADE ON UPDATE NO ACTION`);
    await queryRunner.query(`ALTER TABLE "student_classes_class" ADD CONSTRAINT "FK_3d4b9aa106e0113abd39f061827" FOREIGN KEY ("classId") REFERENCES "class"("id") ON DELETE CASCADE ON UPDATE NO ACTION`);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`ALTER TABLE "student_classes_class" DROP CONSTRAINT "FK_3d4b9aa106e0113abd39f061827"`);
    await queryRunner.query(`ALTER TABLE "student_classes_class" DROP CONSTRAINT "FK_4e224193a4e2c8e1b28afa74e9d"`);
    await queryRunner.query(`ALTER TABLE "lesson" DROP CONSTRAINT "FK_f8129e3c7eacda851f01f054f96"`);
    await queryRunner.query(`ALTER TABLE "content" DROP CONSTRAINT "FK_0b349f6b8ca7f05eed39ffb956d"`);
    await queryRunner.query(`DROP INDEX "IDX_3d4b9aa106e0113abd39f06182"`);
    await queryRunner.query(`DROP INDEX "IDX_4e224193a4e2c8e1b28afa74e9"`);
    await queryRunner.query(`DROP TABLE "student_classes_class"`);
    await queryRunner.query(`DROP TABLE "student"`);
    await queryRunner.query(`DROP TABLE "class"`);
    await queryRunner.query(`DROP TABLE "lesson"`);
    await queryRunner.query(`DROP TABLE "content"`);
  }

}
