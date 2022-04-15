import AbstractNotaRepository from './abstract/AbstractNotaRepository';
import NotaEntity from '../../../application/core/data/entities/NotaEntity';
import { Repository, getRepository, InsertResult } from 'typeorm';

export default class NotaRepository implements AbstractNotaRepository {

  private repository: Repository<NotaEntity>;
  constructor() {
    this.repository = getRepository(NotaEntity);
  }

  async getAll(): Promise<NotaEntity[]> {
    return await this.repository.find();
  }

}
