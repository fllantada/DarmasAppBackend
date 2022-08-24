import { DarmasApp } from './DarmasApp';
import dotenv from 'dotenv';

dotenv.config();

//Unica funcion iniciar la aplicacion Sedes que nos da una ruta para obtener todas las sedes

try {
  new DarmasApp().start();
} catch (e) {
  process.exit(1);
}

process.on('uncaughtException', err => {
  process.exit(1);
});
