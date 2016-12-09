import Ember from 'ember';

export default Ember.Route.reopen({
  activate: function() {
    this._super();
    Ember.$('.body-canvas').addClass('index');
  },
  redirect: function(){
    this.transitionTo('countdown');
  },
  /* model(){
    return [
    {id: 1,
     title: 'Joshua',
     route: 'joshua',
     url: '/img/josh3600.png'},
    {id: 2,
     title: 'Kim',
     route: 'kim',
     url: '/img/kim.png'},
    {id: 3,
     title: 'Sebastian',
     route: 'sebastian',
     url: '/img/seb1600.png'}
    ];
  } */
  model(){
    return this.store.findAll('char');
  }
});