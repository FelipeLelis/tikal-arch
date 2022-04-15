import Express, { RequestHandler, Response, Request } from 'express';
import { NotasAdminRouter } from '../contexts/professores-aluno/routers/NotasAdminRouter';
import { Connection } from 'typeorm';
import { PostgresConnectionOptions } from 'typeorm/driver/postgres/PostgresConnectionOptions';
import { httpCodes } from './core/ErrorCodes';
import DatabaseConnection from './core/data/DatabaseConnection';
import Application from './core/resources/Application';
import ResponseHandler from './utils/ResponseHandler';
import { NextFunction } from 'connect';
import AlunoController from '../contexts/professores-aluno/controllers/AlunoController';
import AlunoMapper from '../contexts/professores-aluno/domain/mappers/AlunoMapper';
import AbstractNotasRepository from '../contexts/professores-aluno/repositories/abstract/AbstractNotasRepository';
import NotasController from '../contexts/professores-aluno/repositories/AlunoRepository';
import { NotasRouter } from '../contexts/alunos/routers/NotaRouter';
import NotaMapper from '../contexts/alunos/domain/mappers/NotaMapper';
import AbstractNotaRepository from '../contexts/alunos/repositories/abstract/AbstractNotaRepository';
import NotaRepository from '../contexts/alunos/repositories/NotaRepository';
import NotaController from '../contexts/alunos/controllers/NotaController';

import ResponseError from './core/types/ResponseError';
import alunoRepository from '../contexts/professores-aluno/repositories/AlunoRepository';
export default class BillingContext extends Application {

  constructor(route: string, app: Express.Application) {
    super(route, app);
  }

  public async initialize() {
    try {
      const dbInfo: Connection = await DatabaseConnection.connect();
      DatabaseConnection.printConnectionInfo(dbInfo.options as PostgresConnectionOptions);
      this.createApp();
      return true;
    } catch (e) {
      console.debug(e);
    }
  }

  createApp() {
    const alunoMapper: AlunoMapper = new AlunoMapper();
    const alunoController: AlunoController = new AlunoController(
      alunoMapper, new alunoRepository);

    const notaMapper: NotaMapper = new NotaMapper();
    const notaRepository: AbstractNotaRepository = new NotaRepository();
    const notaController: NotaController = new NotaController(notaMapper, notaRepository);

    this.router.get('/', this.homePage());
    this.addRouter(new NotasAdminRouter('/notas-admin', alunoController));
    this.addRouter(new NotasRouter('notas', notaController));
    this.router.use(this.notFound());
  }

  notFound(): RequestHandler {
    return (req: Request, res: Response, next: NextFunction) => {
      const err: ResponseError = {
        code: httpCodes.NOT_FOUND,
      };
      return ResponseHandler.sendError(res, err);
    };
  }

  homePage(): RequestHandler {
    return (req: Request, res: Response, next: NextFunction) => {
      return ResponseHandler.sendResponse(res, httpCodes.OK);
    };
  }
}
