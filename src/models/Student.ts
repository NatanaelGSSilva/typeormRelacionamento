import {
  Entity,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  PrimaryGeneratedColumn,
  ManyToMany,
  JoinTable,
} from 'typeorm';
import Class from './Class';
import { Max, Min, MaxLength, MinLength } from 'class-validator';

@Entity('student')
export default class Student {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  @MaxLength(15, { message: "Nome precisa ter no maximo 15 caracteres" })
  @MinLength(2, { message: "Nome deve ter mais de 1 caracter de letra" })
  name: string;

  @Column()
  @Max(99999)
  @Min(10000)
  key: number;

  @ManyToMany(type => Class)
  @JoinTable()
  classes: Class;

  @CreateDateColumn({ name: 'created_At' })
  createdAt: Date;

  @UpdateDateColumn({ name: 'updated_At' })
  updatedAt: Date;
}
