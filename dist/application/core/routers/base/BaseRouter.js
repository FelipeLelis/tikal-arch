"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
class BaseRouter {
    constructor(route, initialize = true) {
        this.route = route;
        this.router = express_1.default.Router();
        if (initialize) {
            this.addRoutes();
        }
    }
    addRoutes() {
        throw new Error('This router must implements addRoutes().');
    }
}
exports.default = BaseRouter;
//# sourceMappingURL=BaseRouter.js.map