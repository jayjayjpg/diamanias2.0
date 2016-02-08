import Ember from 'ember';

/* const {
  set,
  computed,
  Component
} = Ember; */

export default Ember.Component.extend({
  tagName: 'article',
  column: '',
  classNames: ['panel','comic-panel'],
  classNameBindings: ['isSpeaking'],
  isSpeaking: false,
  click(){
    this.toggleProperty('isSpeaking');
    //alert(this.get('data.column'));
  },
  actions: {
    showMore(){
      console.log("show more");
      return true;
    }
  }
});
