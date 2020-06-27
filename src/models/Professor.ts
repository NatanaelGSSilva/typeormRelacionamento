import { Entity, Column, ChildEntity } from 'typeorm';
import Pessoa from './Pessoa';

@ChildEntity()
export default class Professor extends Pessoa {
  @Column()
  materia: string;

  @Column()
  sala: string;
}
