import Ember from 'ember';

export default Ember.Component.extend({
  tagName: 'input',
  classNames: ['progress-bar'],
  attributeBindings: ['step','min','max','value','type'],
  value: 0, // add two way binding from progress mut helper
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
