"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.register = void 0;
const sedesGetController_1 = require("../controllers/sedesGetController");
const register = (router) => {
    const controller = new sedesGetController_1.SedesGetController();
    router.get('/sedes', (req, res) => controller.run(req, res));
};
exports.register = register;
