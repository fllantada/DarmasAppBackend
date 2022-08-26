"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.register = void 0;
const resumenliquidacionesGetController_1 = require("../controllers/resumenliquidacionesGetController");
const register = (router) => {
    const controller = new resumenliquidacionesGetController_1.ResumenLiquidacionesGetController();
    router.get('/resumenliquidaciones', (req, res) => controller.run(req, res));
};
exports.register = register;
