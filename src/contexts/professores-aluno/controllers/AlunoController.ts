import { BaseController } from "../../../application/core/controllers/base";
import AlunoMapper from "../domain/mappers/AlunoMapper";
import Aluno from "../domain/models/Aluno";
import AbstractNotasRepository from "../repositories/abstract/AbstractNotasRepository";
import PayloadValidator from "../../../application/utils/PayloadValidator";
import {
  buildRawError,
  buildError,
  httpCodes,
} from "../../../application/core/ErrorCodes";

export default class AlunoController extends BaseController {

  constructor(
    private alunoMapper: AlunoMapper,
    private notasRepository: AbstractNotasRepository,
  ) {
    super();
  }

  async index(): Promise<Aluno[]> {
    try {
      const alunos: Aluno[] = this.alunoMapper.mapCollection(
        await this.notasRepository.getAll()
      );
      return alunos;
    } catch (e) {
      throw buildRawError(e);
    }
  }
  async create(payload: any): Promise<Aluno> {
    try {
      const payloadValidator: PayloadValidator = new PayloadValidator();
      payloadValidator.validate(payload.name, "Firstname is required");

      const errors = payloadValidator.getErrors();
      if (errors && errors.length > 0) {
        throw buildError(httpCodes.BAD_REQUEST, errors);
      }

      const aluno: Aluno = new Aluno();
      aluno.name = payload.name;
      const created: Aluno = this.alunoMapper.map(
        await this.notasRepository.create(this.alunoMapper.reverseMap(aluno))
      );
      return created;
    } catch (e) {
      throw buildRawError(e);
    }
  }
}
