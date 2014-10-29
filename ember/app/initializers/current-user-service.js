export default {
  name: 'current-user-service',
  after: 'store',
  //this still needs work
  initialize: function(container, app) {
    app.inject('route', 'currentUserService', 'service:current-user');
    app.inject('route', 'session', 'simple-auth-session:main');
    app.inject('controller', 'currentUserService', 'service:current-user');
    app.inject('model', 'currentUserService', 'service:current-user');
  }
};
