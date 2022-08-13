import { Router, Request, Response } from 'express';
import { sedesGetController } from '../controllers/sedesGetController';

export const register = (router: Router) => {
  const controller: sedesGetController = new sedesGetController();
  router.get('/sedes', (req: Request, res: Response) => controller.run(req, res));
};
