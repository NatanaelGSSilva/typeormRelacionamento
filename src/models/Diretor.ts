import { Entity, Column } from 'typeorm';
import Pessoa from './Pessoa';

@Entity('diretor')
export default class Diretor extends Pessoa {
  @Column()
  setor: string;
}
