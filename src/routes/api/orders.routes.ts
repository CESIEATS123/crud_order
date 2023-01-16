import { Router } from 'express';
import * as controllers from '../../controllers/orders.controllers';

const routes = Router();
// api/roles
routes.route('/all').get(controllers.all);
routes.route('/createOrder').post(controllers.create);
routes.route('/findOne/:id').get(controllers.findOne);
routes.route('/updateOne/:id').patch(controllers.updateOne);
routes.route('/updateStatus/:id').patch(controllers.updateStatus);
routes.route('/orderDelivred/:id').patch(controllers.orderDelivred);
routes.route('/historyUser/:user').get(controllers.historyUser);

export default routes;