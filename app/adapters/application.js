import JSONApiAdapter from 'ember-data/adapters/json-api';

export default JSONApiAdapter.extend({
  host: 'http://localhost:3000',
  namespace: 'api/v1'
});