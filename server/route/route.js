import userController from '../controllers/userController';
// import ruleValidationMiddleware from '../middlewares/runValidationMiddleware';

const Route = (router) => {
  router.get('/', userController.getUser);
  return router;
};

export default Route;
