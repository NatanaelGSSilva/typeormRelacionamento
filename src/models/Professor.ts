import { Entity, Column } from 'typeorm';
import Pessoa from './Pessoa';

@Entity('professor')
export default class Professor extends Pessoa {
  @Column()
  materia: string;
}
