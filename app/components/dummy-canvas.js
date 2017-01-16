import Ember from 'ember';

export default Ember.Component.extend({
  tagName: 'canvas',
  classNames: ['comic-panel', 'comic-panel-movie','panel'],
  attributeBindings: ['style','width','height'],
  width: 1000,
  height: 1000,
  click(){
    console.log("can click that canvas");
  }
});
