import Ember from 'ember';

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
