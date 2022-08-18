import { Router, Request, Response } from 'express';
import { ResumenLiquidacionesGetController } from '../controllers/resumenliquidacionesGetController';

export const register = (router: Router) => {
  const controller: ResumenLiquidacionesGetController = new ResumenLiquidacionesGetController();
  router.get('/resumenliquidaciones', (req: Request, res: Response) => controller.run(req, res));
};
