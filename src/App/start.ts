import { DarmasApp } from './DarmasApp';
import { UpdateApp } from './UpdateApp';
import dotenv from 'dotenv';

dotenv.config();

// Unica funcion iniciar la aplicacion

try {
  console.log('Iniciando la aplicacion!  impresionante');

  new UpdateApp().start(); //bucle de actualizacion
  new DarmasApp().start();
} catch (e) {
  process.exit(1);
}

process.on('uncaughtException', err => {
  process.exit(1);
});
