import { NextFunction, Response, RequestHandler } from 'express';
import { BaseRouter } from '../../../application/core/routers/base';
import NotaController from '../controllers/NotaController';
import ResponseHandler from '../../../application/utils/ResponseHandler';
import { httpCodes } from '../../../application/core/ErrorCodes';
import Request from '../../../application/utils/extended/Request';

export class NotasRouter extends BaseRouter {
  constructor(
    route: string, private notaController: NotaController) {
    super(route, false);
    this.addRoutes();
  }

  addRoutes() {
    this.router.get('/', this.index());
  }

  index(): RequestHandler {
    return (req: Request, res: Response, next: NextFunction) => {
      this.notaController.index()
        .then(notas => ResponseHandler.sendResponse(res, httpCodes.OK, 'notas', notas))
        .catch(err => ResponseHandler.sendError(res, err));
    };
  }

  me(): RequestHandler {
    return (req: Request, res: Response, next: NextFunction) => {
      return ResponseHandler.sendResponse(res, httpCodes.OK, 'notas', req.Nota);
    };
  }
}
