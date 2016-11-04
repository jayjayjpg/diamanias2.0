import Ember from 'ember';
import { Timeline, Tween } from 'gsap-shim'; // add timeline with onUpdate event handler to setup config for each frame

export default Ember.Component.extend({
  tagName: 'article',
  classNames: ['panel','comic-panel-slider', 'slider'],
  classNameBindings: ['isOpaque:opacity-50:active'],
  isOpaque: true,
  attributeBindings: ['style'],
  init(){
    this._super(...arguments);
  },
  didInsertElement(){
    this.$().slider({full_width: true, indicators: false});
  },
  mouseEnter(){
    this.set('isOpaque',false);
  },
  mouseLeave(){
    this.set('isOpaque',true);
    return true;
  },
  click(){

  }
});
