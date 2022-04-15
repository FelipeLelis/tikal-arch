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
const AlunoEntity_1 = __importDefault(require("../../../application/core/data/entities/AlunoEntity"));
const typeorm_1 = require("typeorm");
class AlunoRepository {
    constructor() {
        this.repository = typeorm_1.getRepository(AlunoEntity_1.default);
    }
    create(aluno) {
        return __awaiter(this, void 0, void 0, function* () {
            const result = yield this.repository.insert(aluno);
            if (result.generatedMaps.length > 0) {
                return aluno;
            }
            return;
        });
    }
    getAll() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.repository.find();
        });
    }
}
exports.default = AlunoRepository;
//# sourceMappingURL=AlunoRepository.js.map