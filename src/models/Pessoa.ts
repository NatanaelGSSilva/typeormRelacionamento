import {
  Entity,
  CreateDateColumn,
  UpdateDateColumn,
  PrimaryGeneratedColumn,
  Column,
  TableInheritance,
} from 'typeorm';

@Entity('pessoa')
@TableInheritance({ column: { type: 'varchar', name: 'type' } })
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
