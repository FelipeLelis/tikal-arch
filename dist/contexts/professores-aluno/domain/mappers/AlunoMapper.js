"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const EntityMapper_1 = __importDefault(require("../../../../application/core/mappers/base/EntityMapper"));
const Aluno_1 = __importDefault(require("../models/Aluno"));
const AlunoEntity_1 = __importDefault(require("../../../../application/core/data/entities/AlunoEntity"));
class AlunoMapper extends EntityMapper_1.default {
    map(from) {
        if (from && from.id) {
            const aluno = new Aluno_1.default();
            aluno.id = from.id;
            aluno.name = from.name;
            return aluno;
        }
    }
    reverseMap(to) {
        if (to) {
            const aluno = new AlunoEntity_1.default();
            aluno.id = to.id;
            aluno.name = to.name;
            return aluno;
        }
    }
}
exports.default = AlunoMapper;
//# sourceMappingURL=AlunoMapper.js.map