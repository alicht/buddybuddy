export default {
  name: 'current-user-service',
  initialize: function(container, app) {
    app.inject('route', 'currentUserService', 'service:current-user');
    app.inject('controller', 'currentUserService', 'service:current-user');
  }
};
