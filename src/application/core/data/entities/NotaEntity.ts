import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from "typeorm";
import AlunoEntity from "./AlunoEntity";
@Entity("notas")
export default class NotaEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  idAluno: number;

  @OneToMany(() => AlunoEntity, (nota) => nota.nota)
  photos: AlunoEntity[];

  @Column()
  n1: number;

  @Column()
  n2: number;

  @Column()
  n3: number;

  @Column()
  n4: number;

  @Column()
  createdAt: Date;

  @Column()
  updatedAt: Date;
}
