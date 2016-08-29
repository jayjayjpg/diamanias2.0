import Ember from 'ember';

export default Ember.Component.extend({
  tagName: 'input',
  classNames: ['progress-bar'],
  attributeBindings: ['step','min','max','value','type'],
  value: Ember.computed('progress', function(){
    return this.get('progress');
  }),
  type: "range",
  min: 0,
  max: 1,
  focus(){
    this.get('focusAction')();
  },
  input(ev){
    this.get('inputAction')(ev.target.value);
  }
});
