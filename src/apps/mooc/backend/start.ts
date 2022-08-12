import { MoocBackendApp } from './MoocBackendApp';
console.log('Inicio mook desde aca');

//es el inicio de la aplicacion.

try {
  console.log('1)->Inicio de la aplicacion');
  console.log('------------------------');
  new MoocBackendApp().start();
  console.log('------------------------');
  console.log('2)->Termino de la aplicacion');
} catch (e) {
  console.log(e);
  process.exit(1);
}

process.on('uncaughtException', err => {
  console.log('uncaughtException', err);
  process.exit(1);
});
