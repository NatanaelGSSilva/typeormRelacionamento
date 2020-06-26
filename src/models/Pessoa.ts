import {
  Entity,
  CreateDateColumn,
  UpdateDateColumn,
  PrimaryGeneratedColumn,
  Column,
} from 'typeorm';

// @Entity('animal')
export default abstract class Pessoa {

  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  email: string;

  @Column()
  dataNascimento: Date;

  @CreateDateColumn({ name: 'created_At' })
  createdAt: Date;

  @UpdateDateColumn({ name: 'updated_At' })
  updatedAt: Date;

}
