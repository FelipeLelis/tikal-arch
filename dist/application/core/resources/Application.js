"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
class Application {
    constructor(route, app) {
        this.route = route;
        this.app = app;
        this.router = express_1.Router();
        this.app.use(this.route, this.router);
    }
    initialize() { }
    addRouter(router) {
        this.router.use(router.route, router.router);
    }
}
exports.default = Application;
//# sourceMappingURL=Application.js.map