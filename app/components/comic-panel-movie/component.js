import Ember from 'ember';
import { default as Timeline } from 'timelinemax';

export default Ember.Component.extend({
  tagName: 'article',
  classNames: ['comic-panel', 'comic-panel-movie','panel'],
  init(){
    this._super(...arguments);
    //this.set('timeline', tween);
  },
  timeline: Ember.computed(() => new Timeline()),
  didInsertElement(){
    let timeline = this.get('timeline');
    let objs = this.$('.obj').toArray();

    objs.forEach(obj => {
      timeline.fromTo(
        obj,
        1,
        { transform: 'translateY(-500px)'},
        { transform: 'translateY(0)'},
        '-=.5'
       );
    });
    timeline.pause();
  },

  play(){
    this.get('timeline').play();
  },

  pause(){
    this.get('timeline').pause();
  },

  reverse(){
    this.get('timeline').reverse();
  }
  
});
