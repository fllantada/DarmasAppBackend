import { Router, Request, Response } from 'express';
import { UpdateController } from '../controllers/UpdateController';

export const register = (router: Router) => {
  const controller: UpdateController = new UpdateController();
  router.get('/update', (req: Request, res: Response) => controller.run(req, res));
};
