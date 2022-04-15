import { NextFunction, Response, RequestHandler } from 'express';
import AlunoController from '../controllers/AlunoController';
import { httpCodes } from '../../../application/core/ErrorCodes';
import { BaseRouter } from '../../../application/core/routers/base';

import ResponseHandler from '../../../application/utils/ResponseHandler';
import Request from '../../../application/utils/extended/Request';

export class NotasAdminRouter extends BaseRouter {

  constructor(route: string, private alunoController: AlunoController) {
    super(route, false);
    this.addRoutes();
  }

  addRoutes() {
    this.router.get('/', this.index());
    this.router.post('/', this.create());
  }

  index(): RequestHandler {
    return(req: Request, res: Response, next: NextFunction) => {
      this.alunoController.index()
        .then(alunos => ResponseHandler.sendResponse(res, httpCodes.OK, 'alunos', alunos))
        .catch(err => ResponseHandler.sendError(res, err));
    };
  }
  create(): RequestHandler {
    return(req: Request, res: Response, next: NextFunction) => {
      this.alunoController.create(req.body)
        .then(alunos => ResponseHandler.sendResponse(res, httpCodes.OK, 'alunos-notas', alunos))
        .catch(err => ResponseHandler.sendError(res, err));
    };
  }
}
