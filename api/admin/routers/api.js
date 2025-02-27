const { Router } = require('express');

const { ensureAuthenticated, parseJson } = require('../../middlewares');

const AdminControllers = require('../controllers');

const apiRouter = Router();
apiRouter.use(ensureAuthenticated);
apiRouter.get('/builds', AdminControllers.Build.list);
apiRouter.get('/builds/:id', AdminControllers.Build.findById);
apiRouter.get('/builds/:id/log', AdminControllers.Build.findBuildLog);
apiRouter.get('/events', AdminControllers.Event.list);
apiRouter.get('/organizations', AdminControllers.Organization.list);
apiRouter.post('/organizations', parseJson, AdminControllers.Organization.create);
apiRouter.get('/organizations/:id', AdminControllers.Organization.findById);
apiRouter.put('/organizations/:id', parseJson, AdminControllers.Organization.update);
apiRouter.get('/roles', AdminControllers.Role.list);
apiRouter.get('/sites', AdminControllers.Site.list);
apiRouter.get('/sites/:id', AdminControllers.Site.findById);
apiRouter.put('/sites/:id', parseJson, AdminControllers.Site.update);
apiRouter.delete('/sites/:id', AdminControllers.Site.destroy);
apiRouter.get('/me', AdminControllers.User.me);
apiRouter.get('/user-environment-variables', AdminControllers.UserEnvironmentVariable.list);
apiRouter.get('/users', AdminControllers.User.list);
apiRouter.get('/users/:id', AdminControllers.User.findById);
apiRouter.post('/users/invite', parseJson, AdminControllers.User.invite);
apiRouter.post('/users/resend-invite', parseJson, AdminControllers.User.resendInvite);

module.exports = apiRouter;
