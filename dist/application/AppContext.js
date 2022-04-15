"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const NotasAdminRouter_1 = require("../contexts/professores-aluno/routers/NotasAdminRouter");
const ErrorCodes_1 = require("./core/ErrorCodes");
const DatabaseConnection_1 = __importDefault(require("./core/data/DatabaseConnection"));
const Application_1 = __importDefault(require("./core/resources/Application"));
const ResponseHandler_1 = __importDefault(require("./utils/ResponseHandler"));
const AlunoController_1 = __importDefault(require("../contexts/professores-aluno/controllers/AlunoController"));
const AlunoMapper_1 = __importDefault(require("../contexts/professores-aluno/domain/mappers/AlunoMapper"));
const NotaRouter_1 = require("../contexts/alunos/routers/NotaRouter");
const NotaMapper_1 = __importDefault(require("../contexts/alunos/domain/mappers/NotaMapper"));
const NotaRepository_1 = __importDefault(require("../contexts/alunos/repositories/NotaRepository"));
const NotaController_1 = __importDefault(require("../contexts/alunos/controllers/NotaController"));
const AlunoRepository_1 = __importDefault(require("../contexts/professores-aluno/repositories/AlunoRepository"));
class BillingContext extends Application_1.default {
    constructor(route, app) {
        super(route, app);
    }
    initialize() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const dbInfo = yield DatabaseConnection_1.default.connect();
                DatabaseConnection_1.default.printConnectionInfo(dbInfo.options);
                this.createApp();
                return true;
            }
            catch (e) {
                console.debug(e);
            }
        });
    }
    createApp() {
        const alunoMapper = new AlunoMapper_1.default();
        const alunoController = new AlunoController_1.default(alunoMapper, new AlunoRepository_1.default);
        const notaMapper = new NotaMapper_1.default();
        const notaRepository = new NotaRepository_1.default();
        const notaController = new NotaController_1.default(notaMapper, notaRepository);
        this.router.get('/', this.homePage());
        this.addRouter(new NotasAdminRouter_1.NotasAdminRouter('/notas-admin', alunoController));
        this.addRouter(new NotaRouter_1.NotasRouter('notas', notaController));
        this.router.use(this.notFound());
    }
    notFound() {
        return (req, res, next) => {
            const err = {
                code: ErrorCodes_1.httpCodes.NOT_FOUND,
            };
            return ResponseHandler_1.default.sendError(res, err);
        };
    }
    homePage() {
        return (req, res, next) => {
            return ResponseHandler_1.default.sendResponse(res, ErrorCodes_1.httpCodes.OK);
        };
    }
}
exports.default = BillingContext;
//# sourceMappingURL=AppContext.js.map