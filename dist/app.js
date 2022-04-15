"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata");
const morgan_1 = __importDefault(require("morgan"));
const express_1 = __importDefault(require("express"));
const compression_1 = __importDefault(require("compression"));
const body_parser_1 = __importDefault(require("body-parser"));
const lusca_1 = __importDefault(require("lusca"));
const dotenv_1 = __importDefault(require("dotenv"));
const path_1 = __importDefault(require("path"));
const passport_1 = __importDefault(require("passport"));
const express_validator_1 = __importDefault(require("express-validator"));
const helpers_1 = require("./application/utils/helpers");
// Load environment variables from .env file, where API keys and passwords are configured
dotenv_1.default.config({ path: '.env' });
const application_1 = require("./application");
// Create Express server
const app = express_1.default();
// Express configuration
app.set('port', process.env.PORT || 3000);
app.use(compression_1.default());
app.use(body_parser_1.default.json());
app.use(body_parser_1.default.urlencoded({ extended: true }));
app.use(morgan_1.default(helpers_1.getMorganLogLevel()));
app.use(express_validator_1.default());
app.use(passport_1.default.initialize());
app.use(passport_1.default.session());
app.use(lusca_1.default.xframe('SAMEORIGIN'));
app.use(lusca_1.default.xssProtection(true));
app.use(express_1.default.static(path_1.default.join(__dirname, 'public'), { maxAge: 31557600000 }));
app.get('/', (req, res, next) => {
    res.redirect('/api');
});
new application_1.AppContext('/api', app).initialize();
exports.default = app;
//# sourceMappingURL=app.js.map