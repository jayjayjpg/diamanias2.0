import Ember from 'ember';
import { Timeline, Tween } from 'gsap-shim';


export default Ember.Component.extend({
  tagName: 'article',
  classNames: ['comic-panel', 'comic-panel-movie','panel'],
  attributeBindings: ['style'],
  bgStyle: Ember.computed('data.bgImg', function(){
    return "url('" +  this.get('data.bgImg') + "')";
  }),
  init(){
    this._super(...arguments);
    //console.log("Tweenlite obj: " + TweenLite);
    let timeline = new Timeline({
      onUpdate: () => {
        this.notifyPropertyChange('progress');
      },
      repeat: -1,
      repeatDelay: 0
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
    let screen = this.$();
    let timeline = this.get('timeline');
    let objs = this.$('.obj').toArray();
    let bgStyle = this.get('bgStyle');
    console.log("bg img is: " + this.get('bgStyle'));
    Tween.set(screen, {
                        css: {
                          backgroundImage: bgStyle
                        }
    });

    timeline.add( Tween.set(screen, {
                                      css: { 
                                       // backgroundImage: bgStyle,
                                        backgroundPosition: "center 0"
                                      }
                            }
                )
    );
    for (let j = 0; j < 10; j += 1){
      for (let i = 1; i < 6; i += 1){
        timeline.add( Tween.set( screen, {
                                          css: { 
                                            //backgroundImage: bgStyle,
                                            backgroundPosition: "center " + -i * 400 + "px"
                                          },
                                          delay: 0.2
                                }
                    )
        );
      }
    }

   /* objs.forEach(obj => {
      timeline.fromTo(
        obj,
        1,
        { transform: 'translateY(-500px)'},
        { transform: 'translateY(0)'},
        '-=.5'
       );
    }); */
   
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
      console.log("get progress: " + this.get('timeline').progress());
      return this.get('timeline').progress();
    },

    set(key, value){
      console.log("set the progress" + value);
      return this.get('timeline').progress(value);
    }
  })
  
});
