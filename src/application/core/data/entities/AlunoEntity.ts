import { Entity, PrimaryGeneratedColumn, Column, OneToMany, ManyToOne } from 'typeorm';
import NotaEntity from './NotaEntity';
@Entity('alunos')
export default class AlunoEntity {

  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  createdAt: Date;

  @Column()
  updatedAt: Date;

  @Column()
  name: string;
  
  @ManyToOne(() => NotaEntity, nota => nota.idAluno)
    nota: AlunoEntity;
}
