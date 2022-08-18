import { Request, Response } from 'express';
import { LiquidacionesSemanales } from '../../Context.liquidaciones/Liquidaciones/aplication/LiquidacionesSemanales';
import { Controller } from '../shared/interfaces/Controller';
import { DentalinkRepository } from '../../Context.liquidaciones/Liquidaciones/infrastructure/dentalinkRepository';
export class ResumenLiquidacionesGetController implements Controller {
  constructor() {}
  async run(req: Request, res: Response): Promise<void> {
    //Solicitar get a las sedes
    console.log('---Inicie resumen liquiudaciones get controller');

    //llama a la aplicacion
    const repository = new DentalinkRepository();
    const liquidaciones = new LiquidacionesSemanales(repository);
    //gestiona servicios, modelos, repsositorios, etc
    liquidaciones.run();
    //tengo q pasarle los metodos que necesita de infraestructura.

    //Le tengo q psar un repositorio

    //Enviar respuesta

    res.send('ok');
  }
}
