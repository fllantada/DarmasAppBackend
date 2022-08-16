import { Router, Request, Response } from 'express';
import { LiquidacionesPostController } from '../controllers/liquidacionesPostController';

export const register = (router: Router) => {
  const controller: LiquidacionesPostController = new LiquidacionesPostController();
  router.post('/liquidaciones', (req: Request, res: Response) => controller.run(req, res));
};
