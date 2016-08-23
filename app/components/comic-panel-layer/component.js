import Ember from 'ember';

const {
  Component,
  computed
} = Ember;

export default Component.extend({
  tagName: 'article',
  classNames: ['panel','comic-panel-layer','height-2x'],
  activeLayer: computed('imgData.[]','layerIndex', function(){
    return this.get('imgData.[]').objectAt(this.get('layerIndex'));
  }),
  layerIndex: 0,
  maxLayers: computed('imgData.[]', function(){
    return this.get('imgData.[]').get('length');
  }),
  mouseDown(){
    if (this.get('layerIndex') >= this.get('maxLayers')){
        return;
    }
    this.incrementProperty('layerIndex');
  },
  keyDown(e){
    if (e.key === "Space"){
      this.set("layerIndex", 0);
    }
  }
});
