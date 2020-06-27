import { Entity, Column, ChildEntity } from 'typeorm';
import Identifier from './Identifier';

@Entity()
export default class Professor {

  @Column(type => Identifier)
  identification: Identifier;

  @Column()
  materia: string;

  @Column()
  sala: string;
}
