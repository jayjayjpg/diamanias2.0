/* jshint node: true */

module.exports = function(environment) {
  var ENV = {
    modulePrefix: 'diamanias',
    environment: environment,
    firebase: {
      apiKey: 'xyz',
      authDomain: 'dazzling-inferno-4794.firebaseio.com/',
      databaseURL: 'https://dazzling-inferno-4794.firebaseio.com/',
      storageBucket: 'dazzling-inferno-4794.appspot.com',
    },
    baseURL: '/',
    locationType: 'auto',
    contentSecurityPolicy: {
      'style-src': "'self' 'unsafe-inline'",
      'connect-src': "'self' https://auth.firebase.com wss://*.firebaseio.com",
      'frame-src': "'self' https://*.firebaseio.com",
      'img-src': "'self' data: https://*.firebaseio.com",
      'script-src': "'self' 'unsafe-eval' https://*.firebaseio.com"
    },


    EmberENV: {
      FEATURES: {
        // Here you can enable experimental features on an ember canary build
        // e.g. 'with-controller': true
      }
    },

    APP: {
      // Here you can pass flags/options to your application instance
      // when it is created
    }
  };

  if (environment === 'development') {
    // ENV.APP.LOG_RESOLVER = true;
    // ENV.APP.LOG_ACTIVE_GENERATION = true;
    // ENV.APP.LOG_TRANSITIONS = true;
    // ENV.APP.LOG_TRANSITIONS_INTERNAL = true;
    // ENV.APP.LOG_VIEW_LOOKUPS = true;
  }

  if (environment === 'test') {
    // Testem prefers this...
    ENV.baseURL = '/';
    ENV.locationType = 'none';

    // keep test console output quieter
    ENV.APP.LOG_ACTIVE_GENERATION = false;
    ENV.APP.LOG_VIEW_LOOKUPS = false;

    ENV.APP.rootElement = '#ember-testing';
  }

  if (environment === 'production') {
    ENV.baseURL = '/';
    ENV.locationType = 'auto';

  }

  return ENV;
};
