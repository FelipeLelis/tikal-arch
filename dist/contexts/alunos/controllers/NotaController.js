"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const base_1 = require("../../../application/core/controllers/base");
const ViewModel_1 = require("../../../application/utils/ViewModel");
const ErrorCodes_1 = require("../../../application/core/ErrorCodes");
class NotaController extends base_1.BaseController {
    constructor(notaMapper, notaRepository) {
        super();
        this.notaMapper = notaMapper;
        this.notaRepository = notaRepository;
        this.viewModel = new ViewModel_1.ViewModelBuilder()
            .build();
    }
    index() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const Notas = this.notaMapper.mapCollection(yield this.notaRepository.getAll());
                return this.viewModel.transformAll(Notas);
            }
            catch (e) {
                throw ErrorCodes_1.buildRawError(e);
            }
        });
    }
}
exports.default = NotaController;
//# sourceMappingURL=NotaController.js.map