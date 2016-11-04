import Ember from 'ember';

//import FirebaseAdapter from 'emberfire/adapters/firebase';
import JSONApiAdapter from 'ember-data/adapters/json-api';

export default JSONApiAdapter.extend({
  host: 'http://localhost:3000'
});