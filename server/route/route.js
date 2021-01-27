import ruleValidationController from '../controllers/run-validation-controller';
import ruleValidationMiddleware from '../middlewares/run-validation-middleware';

const Route = (router) => {
  router.get('/', ruleValidationController.getRule);
  return router;
};

export default Route;
