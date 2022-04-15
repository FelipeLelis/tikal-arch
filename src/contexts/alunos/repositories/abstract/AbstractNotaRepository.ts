import NotaEntity from '../../../../application/core/data/entities/NotaEntity';

export default interface AbstractNotaRepository {
  getAll(): Promise<NotaEntity[]>;
}
