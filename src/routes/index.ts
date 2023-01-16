import { Router } from 'express';
import ordersRoutes from './api/orders.routes';
const routes = Router();

routes.use('/orders', ordersRoutes);

export default routes;