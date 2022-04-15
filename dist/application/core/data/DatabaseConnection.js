"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const typeorm_1 = require("typeorm");
class DatabaseConnection {
    static connect(synchronize) {
        return typeorm_1.createConnection({
            synchronize,
            type: 'postgres',
            host: process.env.DB_HOST,
            database: process.env.DB_NAME,
            port: parseInt(process.env.DB_PORT, 10),
            username: process.env.DB_USER,
            password: process.env.DB_PASSWORD,
            entities: [
                'src/entities/*.js',
                'src/entities/*.ts',
            ],
            logging: synchronize ? ['error', 'query'] : [],
            dropSchema: synchronize,
        });
    }
    static printConnectionInfo(options) {
        console.log('Connected to database:');
        console.log(`${options.type}://${options.username}:${options.password}@${options.host}:${options.port}/${options.database}`);
    }
}
exports.default = DatabaseConnection;
//# sourceMappingURL=DatabaseConnection.js.map