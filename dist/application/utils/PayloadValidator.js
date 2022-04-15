"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class PayloadValidator {
    constructor() {
        this.validations = [];
    }
    validate(condition, message) {
        this.validations.push({
            message,
            condition,
        });
    }
    getErrors() {
        const invalid = this.validations.filter(e => !e.condition);
        return invalid.map(val => val.message);
    }
}
exports.default = PayloadValidator;
//# sourceMappingURL=PayloadValidator.js.map