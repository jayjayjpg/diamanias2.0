import Ember from 'ember';

export default Ember.Component.extend({
  tagName: 'article',
  attributeBindings: ['style'],
  classNames: ['panel','comic-panel','comic-panel-woosh'],
  classNameBindings: ['isMoving:moving:'],
  style: Ember.computed(function(){
    let value = Ember.Handlebars.Utils.escapeExpression(this.get('data.bgImg'));
    return Ember.String.htmlSafe(`background-image: url(${value});`);
  }),
  mouseEnter(){
    this.set('isMoving',true);
  },
  mouseDown(){
    this.set('isMoving',false);
  }
});
