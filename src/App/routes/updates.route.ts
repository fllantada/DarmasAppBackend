import { Router, Request, Response } from 'express';
import { UpdateController } from '../controllers/updateController';

export const register = (router: Router) => {
  console.log('-----------------Antes de la ruta de updates:!!!!');
  const controller: UpdateController = new UpdateController();
  console.log('en la ruta de upates');
  router.get('/update', (req: Request, res: Response) => controller.run(req, res));
};
