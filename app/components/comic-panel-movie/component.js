import Ember from 'ember';
import { Timeline, Tween } from 'gsap-shim';


export default Ember.Component.extend({
  tagName: 'canvas',
  id: 'bla-canvas',
  classNames: ['comic-panel', 'comic-panel-movie','panel'],
  attributeBindings: ['style','width','height','id'],
  width: 1000,
  height: 1000,
  Sprite: Ember.Object.extend({
   render(){
     let ctx = this.get('context');
     ctx.mozImageSmoothingEnabled = false;
     ctx.webkitImageSmoothingEnabled = false;
     ctx.msImageSmoothingEnabled = false;
     ctx.imageSmoothingEnabled = false;
     ctx.clearRect(0, 0, this.get('width'), this.get('height'));
     ctx.drawImage(
        this.get('image'),
        0,
        this.get('frameHeight'),
        this.get('width'),
        this.get('height'),
        0,
        0,
        this.get('dwidth'),
        this.get('dheight')
      );
     console.log("dwidth: " + this.get('dwidth'));
     console.log("frameheight: " +this.get('frameHeight'));
   }
  }),
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
      repeatDelay: 0,
      delay: 0.4
    });
    this.set('timeline', timeline);
    this.get('timeline').progress(0);
 
    let image = new Image();

    image.onload = function() {
      self.set('naturalHeight', image.height);
      self.set('naturalWidth', image.width);
      self.set('pseudoImg', image);
      self.buildTimeline(); // start building timeline just when the bg Image has loaded and dimensions have been calculated
    };
    image.src = this.get('data.bgImg');


  },

  buildTimeline(){     
    let screen = this.$();
    let pseudoImg = this.get('pseudoImg');
    let heightCalc = this.get('naturalHeight') / this.get('data.frameNum');

    console.log("canvas: " + screen[0].getContext("2d"));
    let imgObj = this.get('Sprite').create({
      context: screen[0].getContext("2d"),
      width: this.get('naturalWidth'),
      height: heightCalc,
      frameHeight: 0,
      dwidth: this.get('width'),
      dheight: this.get('height'),
      image: pseudoImg
    });
    this.set('imgObj', imgObj);
    this.get('imgObj').render();
    
    /* let drawFrame = () => {
      this.get('imgObj').render();
    }; */

    let timeline = this.get('timeline');


    timeline.add( Tween.set(imgObj, 0.4, {
                                      frameHeight: 0,
                                      onComplete: this.drawFrame,
                                      onCompleteParams: ['imgObj','frameHeight']
                            }
                )
    ); 
    timeline.add( Tween.set(imgObj, 0.4, {
                                      frameHeight: heightCalc,
                                      onComplete: this.drawFrame,
                                      onCompleteParams: ['imgObj','frameHeight']
                            }
                )
    ); 
    timeline.add( Tween.set(imgObj, 0.4, {
                                      frameHeight: heightCalc * 2,
                                      onComplete: this.drawFrame,
                                      onCompleteParams: ['imgObj','frameHeight']
                            }
                )
    ); 

    
    this.set('timeline', timeline);
    timeline.play();

  },
  
  drawFrame(imgObj, frame){
    console.log("draw new frame");
    this.set('imgObj.frameHeight', frame);
    this.set('imgObj', imgObj);
    this.get('imgObj').render();
  },

  setFrame(timeline, frameIndex){
    let imgObj = this.get('imgObj');
    let heightCalc = this.get('naturalHeight') / this.get('data.frameNum');
    timeline.add( Tween.to(imgObj, 0.4, { 
                                      frameHeight: heightCalc * frameIndex,
                                      onComplete: this.get('imgObj').render
                            }
                )
    ); 
    console.log("added frameHeight" + (heightCalc * frameIndex));
  },

  click(){
    console.log("clicked");
    this.get('timeline').play();
  },

  pause(){
    this.get('timeline').pause();
  },

  reverse(){
    this.get('timeline').reverse();
  }
  
});
