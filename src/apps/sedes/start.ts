import { SedesApp } from './SedesApp';

//Unica funcion iniciar la aplicacion Sedes que nos da una ruta para obtener todas las sedes

try {
  console.log('Inicio sedes');
  new SedesApp().start();
} catch (e) {
  console.log(e);
  process.exit(1);
}

process.on('uncaughtException', err => {
  process.exit(1);
});
