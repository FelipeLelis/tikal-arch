import AbstractNotasRepository from './abstract/AbstractNotasRepository';
import AlunoEntity from '../../../application/core/data/entities/AlunoEntity';
import { getRepository, Repository, InsertResult } from 'typeorm';

export default class AlunoRepository implements AbstractNotasRepository {

  private repository: Repository<AlunoEntity>;

  constructor() {
    this.repository = getRepository(AlunoEntity);
  }

  async create(aluno: AlunoEntity): Promise<AlunoEntity> {
    const result: InsertResult = await this.repository.insert(aluno);
    if (result.generatedMaps.length > 0) {
      return aluno;
    }
    return;
  }

  async getAll(): Promise<AlunoEntity[]> {
    return await this.repository.find();
  }
}
