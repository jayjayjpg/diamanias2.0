import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    redirectUser(route){
    this.transitionToRoute("characters.char", route);
   /* var newPost = this.store.createRecord('comic-panel', {
      bgImg: 'Demo Title',
      bgImg2: 'You can store what ver you want Demo'
    });
    newPost.save(); */
    } 
  }
});
