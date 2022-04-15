"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const base_1 = require("../../../application/core/routers/base");
const ResponseHandler_1 = __importDefault(require("../../../application/utils/ResponseHandler"));
const ErrorCodes_1 = require("../../../application/core/ErrorCodes");
class NotasRouter extends base_1.BaseRouter {
    constructor(route, notaController) {
        super(route, false);
        this.notaController = notaController;
        this.addRoutes();
    }
    addRoutes() {
        this.router.get('/', this.index());
    }
    index() {
        return (req, res, next) => {
            this.notaController.index()
                .then(notas => ResponseHandler_1.default.sendResponse(res, ErrorCodes_1.httpCodes.OK, 'notas', notas))
                .catch(err => ResponseHandler_1.default.sendError(res, err));
        };
    }
    me() {
        return (req, res, next) => {
            return ResponseHandler_1.default.sendResponse(res, ErrorCodes_1.httpCodes.OK, 'notas', req.Nota);
        };
    }
}
exports.NotasRouter = NotasRouter;
//# sourceMappingURL=NotaRouter.js.map