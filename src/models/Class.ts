import {
  Entity,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  PrimaryGeneratedColumn,
  OneToMany,
} from 'typeorm';
import Lesson from './Lesson';
import { Max, Min, Contains, IsFQDN } from 'class-validator';

@Entity('class')
export default class Class {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({
    length: 100,
    unique: true,
  })
  name: string;

  @OneToMany(type => Lesson, classe => Class)
  lessons: Lesson[];

  @Column()
  @Max(60, { message: "O maximo de horas que essa cadeira deve ter é 60 " })
  @Min(40)
  duration: number;

  @Column({
    nullable: true,
  })
  @IsFQDN()
  site: string;

  @Column({
    nullable: true,
  })
  @Contains("Hello")
  text: string;

  @CreateDateColumn({ name: 'created_At' })
  createdAt: Date;

  @UpdateDateColumn({ name: 'updated_At' })
  updatedAt: Date;
}
