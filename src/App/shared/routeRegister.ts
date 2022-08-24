import { Router } from 'express';
import glob from 'glob';

export class RouteRegister {
  private dirname: string;
  private router: Router;

  constructor(router: Router, dirname: string) {
    this.dirname = dirname;
    this.router = router;
    // this.findRoutes();
  }

  findRoutes() {
    const routes: string[] = glob.sync(this.dirname);

    routes.map(routePath => this.registerRoutes(routePath, this.router));
  }

  registerRoutes(routePath: string, router: Router) {
    const route = require(routePath);
    route.register(router);
  }
}
