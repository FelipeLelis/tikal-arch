import { BaseController } from '../../../application/core/controllers/base';
import { ViewModel, ViewModelBuilder } from '../../../application/utils/ViewModel';
import NotaMapper from '../domain/mappers/NotaMapper';
import AbstractNotaRepository from '../repositories/abstract/AbstractNotaRepository';
import Nota from '../domain/models/Nota';
import { buildRawError } from '../../../application/core/ErrorCodes';

export default class NotaController extends BaseController {
  viewModel: ViewModel;

  constructor(private notaMapper: NotaMapper, private notaRepository: AbstractNotaRepository) {
    super();
    this.viewModel = new ViewModelBuilder()
      .build();
  }

  async index(): Promise<Nota[]> {
    try {
      const Notas: Nota[] = this.notaMapper.mapCollection(await this.notaRepository.getAll());
      return this.viewModel.transformAll(Notas);
    } catch (e) {
      throw buildRawError(e);
    }
  }
}
