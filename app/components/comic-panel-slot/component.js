import Ember from 'ember';
import { Timeline, Tween } from 'gsap-shim';


export default Ember.Component.extend({
  tagName: 'article',
  classNames: ['comic-panel', 'comic-panel-movie','panel'],
  attributeBindings: ['style'],
  bgHeight: Ember.computed('data.bgSize', 'data.frameNum', function(){
    return this.get('data.bgSize') / this.get('data.frameNum');
  }),
  bgWidth: Ember.computed('data.bgSize', 'naturalHeight', 'naturalWidth', function(){
    return this.get('naturalWidth') / this.get('naturalHeight') * this.get('data.bgSize');
  }),
  backgroundSize: Ember.computed('width', 'data.bgSize', function(){
    return this.get('bgWidth') + "px " + this.get('data.bgSize') + "px";
  }),
  bgStyle: Ember.computed('data.bgImg', function(){
    return "url('" +  this.get('data.bgImg') + "')";
  }),
  init(){
    this._super(...arguments);
    let self = this;
    let timeline = new Timeline({
      onUpdate: () => {
        this.notifyPropertyChange('progress');
      },
      repeat: -1,
      repeatDelay: 0
    });
    this.set('timeline', timeline);
    this.get('timeline').progress(0);
 
    let image = new Image();
    this.set('pseudoImg', image);
    this.get('pseudoImg').onload = function() {
      self.set('naturalHeight', self.get('pseudoImg').height);
      self.set('naturalWidth', self.get('pseudoImg').width);
      self.buildTimeline(); // start building timeline just when the bg Image has loaded and dimensions have been calculated
    }
    this.get('pseudoImg').src = this.get('data.bgImg');

  },
  /* timeline: Ember.computed(() => new Timeline({
    onUpdate: () => {
      this.notifyPropertyChange('progress');
    }
  })), */
  didInsertElement(){

  },

  buildTimeline(){
    let screen = this.$();
    let timeline = this.get('timeline');
    let cnt = this.get('data.frameNum');
    let bgStyle = this.get('bgStyle');
    let bgSize = this.get('backgroundSize');
    let bgHeight = this.get('bgHeight');

    Tween.set(screen, {
                        css: {
                          backgroundPosition: "center 0",
                          backgroundSize: bgSize,
                          backgroundImage: bgStyle
                        }
    });

    timeline.add( Tween.set(screen, {
                                      css: { 
                                        backgroundPosition: "center 0"
                                      }
                            }
                )
    ); 

  /*  for (let i = 1; i < cnt; i += 1){
      this.setFrame(timeline, i);
    } */

    timeline.from(screen, 0.4, { css: { backgroundPosition: "center 0" } });
    timeline.from(screen, 0.4, { css: { backgroundPosition: "center " + - cnt * bgHeight + "px"  } });
   
    timeline.pause();
  },

  setFrame(timeline, frameIndex){
    let screen = this.$();
    timeline.add( Tween.set( screen, {
                                      css: { 
                                        backgroundPosition: "center " + - frameIndex * bgHeight + "px"
                                      },
                                      delay: 0.2
                            }
                )
    );
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

  /* progress: Ember.computed({
    get(){
      console.log("get progress: " + this.get('timeline').progress());
      return this.get('timeline').progress();
    },

    set(key, value){
      console.log("set the progress" + value);
      return this.get('timeline').progress(value);
    }
  }) */
  
});
