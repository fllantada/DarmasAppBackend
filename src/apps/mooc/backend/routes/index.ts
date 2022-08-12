import { Router } from 'express';
import glob from 'glob';

export function registerRoutes(router: Router) {
  console.log('1) Inicio registerRoutes');

  const routes: string[] = glob.sync(__dirname + '/**/*.route.*');

  //este glob.sync es para buscar dentro de cualquier carpeta interna todos los archivos que tengan
  //la extension .route. y devuelve un arreglo de strings

  console.log('2)Tengo todas las rutas');
  routes.map(route => register(route, router));
}

function register(routePath: string, router: Router) {
  console.log('3)inicie registrar una ruta');
  //console.log('routePath', routePath);
  //console.log('router', router);
  console.log(require(routePath));

  console.log('4)Lo que hace aca es hacer el require de el archivo de ruta');
  const route = require(routePath);
  console.log('5) Ahora va a invocar al metodo register que tiene la ruta requerida');
  route.register(router);
}
