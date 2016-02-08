import Ember from 'ember';

export default Ember.Component.extend({
  tagName: 'article',
  classNames: ['panel','comic-panel-slider'],
  classNameBindings: ['isOpaque:opacity-50:active'],
  isOpaque: true,
  imgNum: 0,
  resolveNum: 0,
  isModelResolved: Ember.computed('imgData.[]','imgNum',function(){
    this.incrementProperty('resolveNum');
    let resolved = this.get('resolveNum');
    if (resolved > 1){
      return true;
    }
    else {
      return false;
    }
  }),
  imgNumMax: Ember.computed('imgData.[]', function(){
    return this.get('imgData').get('length');
  }),
  currentImg: Ember.computed('imgData.[]', 'imgNum', function(){
    let currentImg = this.get('imgData').objectAt(this.get('imgNum'));
    return currentImg;
  }),
  panelTitle: Ember.computed('imgNum', function(){
    return this.get('currentImg').get('slug').capitalize();
  }),
  displayedImg: '',
  attributeBindings: ['style'],
  style: Ember.computed('imgNum', function(){
    let currentImg = this.get('currentImg');
    let resolved = this.get('isModelResolved');
    let currentBg = "";
     if (resolved){
      currentBg = currentImg.get('url');
    } 
    
    return new Ember.Handlebars.SafeString('background-image: url('+ currentBg +')');
  }),
  mouseEnter(){
    this.set('isOpaque',false);
  },
  mouseLeave(){
    if (this.get('imgNum') < this.get('imgNumMax') - 1){
      this.incrementProperty('imgNum');
    }
    else {
      this.set('imgNum',0);
    }
    this.set('isOpaque',true);
    return true;
  },
  click(){
    let param = this.get('currentImg').get('id');
    this.sendAction('main-action', param); //how can I send a param together with the action?
  }
});
