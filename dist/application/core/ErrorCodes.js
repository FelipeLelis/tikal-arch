"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.httpCodes = {
    OK: 200,
    CREATED: 201,
    ACCEPTED: 202,
    NO_CONTENT: 204,
    BAD_REQUEST: 400,
    UNAUTHORIZED: 401,
    NOT_FOUND: 404,
    CONFLICT: 409,
    SERVER_ERROR: 500,
    AUTH_TIMEOUT: 419,
};
exports.httpMessages = {
    [exports.httpCodes.OK]: 'OK',
    [exports.httpCodes.CREATED]: 'Created',
    [exports.httpCodes.ACCEPTED]: 'Accept',
    [exports.httpCodes.NO_CONTENT]: 'No content',
    [exports.httpCodes.BAD_REQUEST]: 'Invalid params',
    [exports.httpCodes.UNAUTHORIZED]: 'Unauthorized',
    [exports.httpCodes.NOT_FOUND]: 'Not found',
    [exports.httpCodes.CONFLICT]: 'Conflict',
    [exports.httpCodes.SERVER_ERROR]: 'Unknown error',
    [exports.httpCodes.AUTH_TIMEOUT]: 'Token expired',
};
/**
 * Response with an error.
 *
 * @param {number} code http error code
 * @returns {Response}
 */
exports.buildError = (code, info) => {
    const message = exports.httpMessages[code] ? exports.httpMessages[code] : exports.httpMessages[exports.httpCodes.SERVER_ERROR];
    return {
        code,
        message,
        info,
    };
};
/**
 * Build an error from an exception or ResponseError
 *
 * @param {e} ResponseError
 * @returns {Response}
 */
exports.buildRawError = (e) => {
    console.error(e);
    // range of handled error is > 2xx and < 5xx
    const code = (e.code && (e.code > 200 && e.code < 600)) ? e.code : exports.httpCodes.SERVER_ERROR;
    const info = e.info ? e.info : e.message;
    return exports.buildError(code, info);
};
//# sourceMappingURL=ErrorCodes.js.map