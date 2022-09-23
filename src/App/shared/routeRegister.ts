import { Router } from 'express';
import glob from 'glob';

export class RouteRegister {
  private dirname: string;
  private router: Router;

  constructor(router: Router, dirname: string) {
    console.log('Inicie constrcutor registrar rutas');
    this.dirname = dirname;
    this.router = router;
    // this.findRoutes();
  }

  findRoutes() {
    console.log('Inicie buscar rutas');
    const routes: string[] = glob.sync(this.dirname);

    routes.map(routePath => this.registerRoutes(routePath, this.router));
  }

  registerRoutes(routePath: string, router: Router) {
    console.log('Inicie registrar rutas');

    const route = require(routePath);
    console.log('rutas:', route);
    route.register(router);
  }
}
