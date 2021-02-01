import userController from '../controllers/userController';
import ruleValidationMiddleware from '../middlewares/ruleValidationMiddleware';
import ruleValidationController from '../middlewares/ruleValidationMiddleware';

const Route = (router) => {
  router.route('/').get(userController.getUser).post(userController.create);
  router.post('/validate-rule', ruleValidationMiddleware.create);
  return router;
};

export default Route;
