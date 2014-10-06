import Ember from 'ember';
import AuthRouteMixin from 'buddybuddy/mixins/auth-route';

module('AuthRouteMixin');

// Replace this with your real tests.
test('it works', function() {
  var AuthRouteObject = Ember.Object.extend(AuthRouteMixin);
  var subject = AuthRouteObject.create();
  ok(subject);
});
