import {
  moduleForModel,
  test
} from 'ember-qunit';

moduleForModel('pairing', 'Pairing', {
  // Specify the other units that are required for this test.
  needs: ['model:user', 'model:log']
});

test('it exists', function() {
  var model = this.subject();
  // var store = this.store();
  ok(!!model);
});
