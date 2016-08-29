import Ember from 'ember';
import { Timeline, Tween } from 'gsap-shim'; // add timeline with onUpdate event handler to setup config for each frame

export default Ember.Component.extend({
  tagName: 'article',
  classNames: ['panel','comic-panel-slider'],
  classNameBindings: ['isOpaque:opacity-50:active'],
  isOpaque: true,
  attributeBindings: ['style'],
  currentImg: "",
  init(){
    this._super(...arguments);
    let timeline = new Timeline({
      onUpdate: ()=> {
        this.notifyPropertyChange('slide');
      },
      repeat: -1
    });
    this.set('timeline', timeline);
  },
  style: Ember.computed('imgNum', function(){
    let timeline = this.get('timeline');
    
    let currentBg = "";
    let bgUrl = new Ember.Handlebars.SafeString('background-image: url('+ currentBg +')');
  }),
  mouseEnter(){
    this.set('isOpaque',false);
  },
  mouseLeave(){

    this.set('isOpaque',true);
    return true;
  },
  click(){
    let param = this.get('currentImg').get('id');
    this.sendAction('main-action', param); //how can I send a param together with the action?
  }
});
