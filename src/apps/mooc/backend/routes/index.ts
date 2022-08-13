import { Router } from 'express';
import glob from 'glob';

export function registerRoutes(router: Router) {
  const routes: string[] = glob.sync(__dirname + '/**/*.route.*');

  //este glob.sync es para buscar dentro de cualquier carpeta interna todos los archivos que tengan
  //la extension .route. y devuelve un arreglo de strings

  routes.map(route => register(route, router));
}

function register(routePath: string, router: Router) {
  console.log(require(routePath));

  const route = require(routePath);

  route.register(router);
}

//__dirname + '/**/*.route.*'
