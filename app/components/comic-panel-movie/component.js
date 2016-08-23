import Ember from 'ember';
import { default as Timeline } from 'timelinemax';

export default Ember.Component.extend({
  tagName: 'article',
  classNames: ['comic-panel', 'comic-panel-movie','panel'],
  init(){
    this._super(...arguments);
    let timeline = new Timeline({
      onUpdate: () => {
        this.notifyPropertyChange('progress');
      }
    });
    this.set('timeline', timeline);
    this.get('timeline').progress(0);

  },
  /* timeline: Ember.computed(() => new Timeline({
    onUpdate: () => {
      this.notifyPropertyChange('progress');
    }
  })), */
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
  },

  progress: Ember.computed({
    get(){
      return this.get('timeline').progress();
    },

    set(key, value){
      return this.get('timeline').progress(value);
    }
  })
  
});
