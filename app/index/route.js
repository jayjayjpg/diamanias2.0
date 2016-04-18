import Ember from 'ember';

export default Ember.Route.reopen({
  activate: function() {
    this._super();
    Ember.$('.body-canvas').addClass('index');
    window.onscroll = function(e){
      console.log(Ember.$('.index-panorama.blurred').length);
      if (Ember.$('index-panorama.blurred').length === 0){
        Ember.$('.index-panorama').addClass('blurred');
        Ember.run.later(function(){
          Ember.$('.index-panorama').removeClass('blurred');
          console.log("remove");
        }, 800);
      }
      return;
    }
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