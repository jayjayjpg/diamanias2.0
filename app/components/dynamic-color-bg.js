import Ember from 'ember';

export default Ember.Component.extend({
  classNames: ['dynamic-color-bg'],
  floorColor: null,
  topColor: null,
  percentage: null,
  attributeBindings: ['colorStyle:style'],
  currentColor: Ember.computed('percentage', function(){
    let floorColor = this.get('floorColor');
    let topColor = this.get('topColor');
    let colorBlocks = "0123456789abcdef".split();
    let percentage = this.get('percentage');
    return topColor; // TODO: calculate intermediate color from top and floor to be returned
  }),
  colorStyle: Ember.computed('currentColor', function(){
    return new Ember.Handlebars.SafeString(`background-color: ${this.get('currentColor')}`);
  })
});
