import { Entity, Column, ChildEntity } from 'typeorm';
import Pessoa from './Pessoa';

@ChildEntity()
export default class Diretor extends Pessoa {
  @Column()
  setor: string;

  @Column()
  responsabilidade: string;
}
