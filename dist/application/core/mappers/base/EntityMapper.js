"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class EntityMapper {
    mapCollection(from) {
        const models = [];
        if (from && from.length) {
            for (const entity of from) {
                models.push(this.map(entity));
            }
        }
        return models;
    }
    reverseMapCollection(to) {
        const entities = [];
        if (to && to.length) {
            for (const model of to) {
                entities.push(this.reverseMap(model));
            }
        }
        return entities;
    }
}
exports.default = EntityMapper;
//# sourceMappingURL=EntityMapper.js.map