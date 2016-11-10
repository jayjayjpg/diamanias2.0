import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('about');
  this.route('animations-demo');
  this.route('characters', function(){
    this.route('char', { path: '/:char_id' });  
    //this.route('char');
  });
  this.route('comic', function(){
    this.route('comic-chapter', function(){
      this.route('comic-page');
    });  
  });

});

export default Router;
