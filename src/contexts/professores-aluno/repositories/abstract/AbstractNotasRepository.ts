import AlunoEntity from '../../../../application/core/data/entities/AlunoEntity';

export default interface AbstractNotasRepository {
  getAll(): Promise<AlunoEntity[]>;
  create(aluno: AlunoEntity): Promise<AlunoEntity>;
}
