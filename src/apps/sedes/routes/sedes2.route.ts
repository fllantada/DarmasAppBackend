import { Router, Request, Response } from 'express';
import { Sedes2GetController } from '../controllers/sedes2GetController';

export const register = (router: Router) => {
  const controller: Sedes2GetController = new Sedes2GetController();
  router.get('/otrasede', (req: Request, res: Response) => {
    console.log('ENTRE A LA RUTA OTRA SEDE');
    controller.run(req, res);
  });
};
