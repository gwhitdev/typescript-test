"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.register = void 0;
const register = (app, route) => {
    app.get(`/${route}/test`, (req, res) => {
        res.json({ message: 'api test success' });
    });
};
exports.register = register;
//# sourceMappingURL=api.js.map