import { Router, Request, Response } from 'express';
import { SedesGetController } from '../controllers/sedesGetController';

export const register = (router: Router) => {
  const controller: SedesGetController = new SedesGetController();
  router.get('/sedes', (req: Request, res: Response) => controller.run(req, res));
};
