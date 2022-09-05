import { DarmasApp } from './DarmasApp';
import dotenv from 'dotenv';

dotenv.config();

// Unica funcion iniciar la aplicacion

try {
  console.log('Iniciando la aplicacion!  impresionante');

  new DarmasApp().start();
  //new CronsJobsSetup.start(); //bucle de actualizacion
} catch (e) {
  process.exit(1);
}

process.on('uncaughtException', err => {
  process.exit(1);
});
