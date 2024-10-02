"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.testUser = void 0;
const pg_core_1 = require("drizzle-orm/pg-core");
exports.testUser = (0, pg_core_1.pgTable)('testusers', {
    id: (0, pg_core_1.varchar)('id', { length: 256 }).primaryKey(),
    username: (0, pg_core_1.varchar)('username', { length: 256 }),
    phone: (0, pg_core_1.varchar)('phone', { length: 256 }),
    avatar: (0, pg_core_1.varchar)('avatar', { length: 256 }),
});
