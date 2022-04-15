"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
const typeorm_1 = require("typeorm");
let NotaEntity = class NotaEntity {
};
__decorate([
    typeorm_1.PrimaryGeneratedColumn(),
    __metadata("design:type", Number)
], NotaEntity.prototype, "id", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", Number)
], NotaEntity.prototype, "idAluno", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", Number)
], NotaEntity.prototype, "n1", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", Number)
], NotaEntity.prototype, "n2", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", Number)
], NotaEntity.prototype, "n3", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", Number)
], NotaEntity.prototype, "n4", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", Date)
], NotaEntity.prototype, "createdAt", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", Date)
], NotaEntity.prototype, "updatedAt", void 0);
NotaEntity = __decorate([
    typeorm_1.Entity("notas")
], NotaEntity);
exports.default = NotaEntity;
//# sourceMappingURL=NotaEntity.js.map