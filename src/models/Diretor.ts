import { Entity, Column, ChildEntity } from 'typeorm';
import Identifier from './Identifier';

@Entity()
export default class Diretor {

  @Column(type => Identifier)
  identification: Identifier;

  @Column()
  setor: string;

  @Column()
  responsabilidade: string;
}
