import Ember from 'ember';
import { Timeline, Tween } from 'gsap-shim';
import canvasDrawing from '../../mixins/canvas-drawing';
import Frame from '../../models/frame';


export default Ember.Component.extend(canvasDrawing, {
  tagName: 'canvas',
  classNames: ['comic-panel', 'comic-panel-movie','panel'],
  attributeBindings: ['style','width','height'],
  width: 1000,
  height: 1000,
  currentImg: null,
  imgSrc: Ember.computed(function(){
    console.log("data bgimg src? " + this.get('data.bgImg'));
    return this.get('data.bgImg');
  }),
  createImgObj(heightCalc){
      console.log("height calc? " + heightCalc);

      let imgInst = Frame.create({ frameHeight: heightCalc, imgSrc: this.get('imgSrc') });

      console.log("imgINst? " + JSON.stringify(imgInst));
     // imgInst.dummyMethod();
      return imgInst;
  },
  createImgObjects(){
    let frameHeight = 2000;
    let imgCollection = [0, 2000, 4000].map((num) => {
      return this.createImgObj(num);
    });

    this.set('imgObjs', imgCollection);
    console.log("imgObjs? " + JSON.stringify(this.get('imgObjs')));
  },
  click(){
    console.log("clicked");
  },
  loop(){
   let currentImg =  this.get('currentImg');
   console.log("currpseudo? " + currentImg.get('pseudoImg'));
   /* this.drawFrame(currentImg.get('pseudoImg'),
                   currentImg.get('frameHeight'),
                   currentImg.get('width'),
                   currentImg.get('height')); */
  },
  didInsertElement(){

    this.createImgObjects();
    this.set('currentImg', this.get('imgObjs')[0]);
    this.loop();
  }
});
