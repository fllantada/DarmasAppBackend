import { Request, Response } from 'express';
import { LiquidacionesSemanales } from '../../Context.liquidaciones/Liquidaciones/aplication/LiquidacionesSemanales';
import { Controller } from '../shared/interfaces/Controller';
import { DentalinkRepository } from '../../Context.liquidaciones/Liquidaciones/infrastructure/dentalinkRepository';
import { MongoRepository } from '../../Context.liquidaciones/Liquidaciones/infrastructure/MongoRepository';
export class ResumenLiquidacionesGetController implements Controller {
  constructor() {}
  async run(req: Request, res: Response): Promise<void> {
    //Solicitar get a las sedes
    console.log('---Inicie resumen liquiudaciones get controller');

    //llama a la aplicacion
    const dentalinkRepository = new DentalinkRepository();
    const mongoRepository = new MongoRepository();
    const liquidaciones = new LiquidacionesSemanales(dentalinkRepository, mongoRepository).run();
    //gestiona servicios, modelos, repsositorios, etc

    //tengo q pasarle los metodos que necesita de infraestructura.

    //Le tengo q psar un repositorio

    //Enviar respuesta
    console.log('Por devolver Liquidaciones', liquidaciones);

    res.send('ok');
  }
}
