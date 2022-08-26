"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RouteRegister = void 0;
const glob_1 = __importDefault(require("glob"));
class RouteRegister {
    constructor(router, dirname) {
        this.dirname = dirname;
        this.router = router;
        // this.findRoutes();
    }
    findRoutes() {
        const routes = glob_1.default.sync(this.dirname);
        routes.map(routePath => this.registerRoutes(routePath, this.router));
    }
    registerRoutes(routePath, router) {
        const route = require(routePath);
        route.register(router);
    }
}
exports.RouteRegister = RouteRegister;
