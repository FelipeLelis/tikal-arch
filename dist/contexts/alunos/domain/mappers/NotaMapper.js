"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const EntityMapper_1 = __importDefault(require("../../../../application/core/mappers/base/EntityMapper"));
const Nota_1 = __importDefault(require("../models/Nota"));
const NotaEntity_1 = __importDefault(require("../../../../application/core/data/entities/NotaEntity"));
class NotaMapper extends EntityMapper_1.default {
    map(from) {
        if (from && from.id) {
            const nota = new Nota_1.default();
            nota.id = from.id;
            nota.idAluno = from.idAluno;
            nota.n1 = from.n1;
            nota.n2 = from.n2;
            nota.n3 = from.n3;
            nota.n4 = from.n4;
            return nota;
        }
    }
    reverseMap(to) {
        if (to) {
            const nota = new NotaEntity_1.default();
            nota.id = to.id;
            nota.idAluno = to.idAluno;
            nota.n1 = to.n1;
            nota.n2 = to.n2;
            nota.n3 = to.n3;
            nota.n4 = to.n4;
            return nota;
        }
    }
}
exports.default = NotaMapper;
//# sourceMappingURL=NotaMapper.js.map