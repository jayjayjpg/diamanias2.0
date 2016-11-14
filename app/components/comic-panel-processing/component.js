import Ember from 'ember';
import pfunc from '/data/demo.pde';


export default Ember.Component.extend({
  tagName: 'article',
  classNames: ['comic-panel', 'comic-panel-processing','panel'],
  attributeBindings: ['style'],
  didInsertElement(){
  var processingCode = pfunc;
  var jsCode = Processing.compile(processingCode).sourceCode;
 
 var canvas = this.$("#canvas1");
 // attaching the sketchProc function to the canvas
 var processingInstance = new Processing('canvas1', processingCode);
  }
});
