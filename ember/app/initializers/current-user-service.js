export default {
  name: 'current-user-service',
  after: 'store',
  initialize: function(container, app) {
    app.inject('route', 'currentUserService', 'service:current-user');
    app.inject('controller', 'currentUserService', 'service:current-user');
    app.inject('model', 'currentUserService', 'service:current-user');

    var currentUserJsonString = localStorage.getItem('currentUser');
    if (currentUserJsonString){
      var currentUserJson = JSON.parse(currentUserJsonString);
      var store = container.lookup('store:main');
      store.pushPayload('user', {user: currentUserJson});
      var user = store.getById('user', currentUserJson.id);
      container.lookup('service:current-user').set('user', user);
    }
  }
};
