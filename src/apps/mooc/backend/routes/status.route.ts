import { Router, Request, Response } from 'express';
import container from '../dependency-injection';
import StatusController from '../controllers/StatusGetController';

export const register = (router: Router) => {
  //aca lo que estoy haciendo es instanciando el statusGetControler

  //es el equivalente a hacer
  //const controller = new StatusGetController();

  const controller: StatusController = container.get('Apps.mooc.controllers.StatusGetController');
  router.get('/status', (req: Request, res: Response) => controller.run(req, res));
  // router.get('/status', (req: Request, res: Response) => console.log('Ruta 2'));
};
