import userController from '../controllers/userController';
import ruleValidationMiddleware from '../middlewares/ruleValidationMiddleware';
import ruleValidationController from '../controllers/ruleValidationController';

const Route = (router) => {
  router.get('/', userController.getUser);
  router.post(
    '/validate-rule',
    ruleValidationMiddleware.create,
    ruleValidationController.create
  );

  return router;
};

export default Route;
