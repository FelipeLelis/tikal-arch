"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ErrorCodes_1 = require("../core/ErrorCodes");
class ResponseHandler {
    static sendError(res, error) {
        const code = error.code ? error.code : ErrorCodes_1.httpCodes.SERVER_ERROR;
        return this.sendResponse(res, code, 'errors', error.info);
    }
    static sendResponse(res, code, name, payload) {
        if (typeof (code) === 'object') {
            return this.sendError(res, code);
        }
        return res.status(code).json({
            code,
            message: ErrorCodes_1.httpMessages[code],
            [name]: payload,
        });
    }
}
exports.default = ResponseHandler;
//# sourceMappingURL=ResponseHandler.js.map