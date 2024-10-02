"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.app = void 0;
const express_1 = __importDefault(require("express"));
exports.app = (0, express_1.default)();
exports.app.use(express_1.default.json());
exports.app.get('/', (req, res) => {
    const response = "Hello, this is portofolia.id API";
    res.status(200);
    res.send(response);
});
exports.app.get('/api/hello', (req, res) => {
    const sayHi = "Hello, world!";
    res.status(200);
    res.json({ message: sayHi });
});
