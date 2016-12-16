import Ember from 'ember';
import config from '../config/environment';

export default Ember.Route.reopen({
  activate: function() {
    this._super();
    Ember.$('.body-canvas').addClass('index');
  },
  redirect: function(){
    if (config.environment === 'development'){
      return false;
    }
    else {
      this.transitionTo('countdown');
    }
  },
  model(){
   return this.store.findAll('char');
  }
});