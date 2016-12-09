import JSONApiAdapter from 'ember-data/adapters/json-api';
import config from '../config/environment';

export default JSONApiAdapter.extend({
  host: `${config.host}`,
  namespace: 'api/v1'
});