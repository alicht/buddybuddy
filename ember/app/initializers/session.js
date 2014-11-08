export default {
  name: 'session',
  after: 'store',
  initialize: function(container, app) {
    app.inject('route', 'session', 'simple-auth-session:main');
    app.inject('controller', 'session', 'simple-auth-session:main');
    app.inject('model', 'session', 'simple-auth-session:main');
  }
};
