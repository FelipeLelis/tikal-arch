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
const base_1 = require("../../../application/core/controllers/base");
const Aluno_1 = __importDefault(require("../domain/models/Aluno"));
const PayloadValidator_1 = __importDefault(require("../../../application/utils/PayloadValidator"));
const ErrorCodes_1 = require("../../../application/core/ErrorCodes");
class AlunoController extends base_1.BaseController {
    constructor(alunoMapper, notasRepository) {
        super();
        this.alunoMapper = alunoMapper;
        this.notasRepository = notasRepository;
    }
    index() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const alunos = this.alunoMapper.mapCollection(yield this.notasRepository.getAll());
                return alunos;
            }
            catch (e) {
                throw ErrorCodes_1.buildRawError(e);
            }
        });
    }
    create(payload) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const payloadValidator = new PayloadValidator_1.default();
                payloadValidator.validate(payload.name, "Firstname is required");
                const errors = payloadValidator.getErrors();
                if (errors && errors.length > 0) {
                    throw ErrorCodes_1.buildError(ErrorCodes_1.httpCodes.BAD_REQUEST, errors);
                }
                const aluno = new Aluno_1.default();
                aluno.name = payload.name;
                const created = this.alunoMapper.map(yield this.notasRepository.create(this.alunoMapper.reverseMap(aluno)));
                return created;
            }
            catch (e) {
                throw ErrorCodes_1.buildRawError(e);
            }
        });
    }
}
exports.default = AlunoController;
//# sourceMappingURL=AlunoController.js.map