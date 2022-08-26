"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.register = void 0;
const updateController_1 = require("../controllers/updateController");
const register = (router) => {
    const controller = new updateController_1.UpdateController();
    router.get('/update', (req, res) => controller.run(req, res));
};
exports.register = register;
