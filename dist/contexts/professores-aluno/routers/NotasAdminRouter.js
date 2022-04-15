"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const ErrorCodes_1 = require("../../../application/core/ErrorCodes");
const base_1 = require("../../../application/core/routers/base");
const ResponseHandler_1 = __importDefault(require("../../../application/utils/ResponseHandler"));
class NotasAdminRouter extends base_1.BaseRouter {
    constructor(route, alunoController) {
        super(route, false);
        this.alunoController = alunoController;
        this.addRoutes();
    }
    addRoutes() {
        this.router.get('/', this.index());
        this.router.post('/', this.create());
    }
    index() {
        return (req, res, next) => {
            this.alunoController.index()
                .then(alunos => ResponseHandler_1.default.sendResponse(res, ErrorCodes_1.httpCodes.OK, 'alunos', alunos))
                .catch(err => ResponseHandler_1.default.sendError(res, err));
        };
    }
    create() {
        return (req, res, next) => {
            this.alunoController.create(req.body)
                .then(alunos => ResponseHandler_1.default.sendResponse(res, ErrorCodes_1.httpCodes.OK, 'alunos-notas', alunos))
                .catch(err => ResponseHandler_1.default.sendError(res, err));
        };
    }
}
exports.NotasAdminRouter = NotasAdminRouter;
//# sourceMappingURL=NotasAdminRouter.js.map