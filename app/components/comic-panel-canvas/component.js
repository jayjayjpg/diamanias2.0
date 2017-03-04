import Ember from 'ember';

export default Ember.Component.extend({
  classNames: ['panel','comic-panel', 'comic-panel-canvas'],
  attributeBindings: ['id:customId'],
  customId: 'canvasPanel',
  imgUrl: 'http://blaiprat.github.io/jquery.animateSprite/img/scottpilgrim_multiple.png',
  setup: Ember.on('didInsertElement', function() {
    let ctx = this.$('canvas')[0].getContext('2d');
    this.set('ctx', ctx);
    this.loop();
  }),
  frameNum: -1,
  drawFrame: Ember.observer('frameNum', function() {
    this.draw();
  }),
  draw() {
    let frame = this.get('frameNum');
    let sx = 108 * frame;
    let ctx = this.get('ctx');
    let img = this.$('#source')[0];
    ctx.clearRect(0, 0, 200, 200);
    ctx.drawImage(img, sx, 0, 1000, 300, 0, 0, 1000, 400);

  },
  loop() {
    this.draw();
    this.nextFrame();
    Ember.run.later(this, this.loop, 1000/12);
  },
  nextFrame() {
      if (this.get('frameNum') < 7) {
        this.incrementProperty('frameNum');
      }
      else {
         this.set('frameNum', 0);
      }
  },
  actions: {
    nextFrame() {
      console.log("call nextFrame");
      if (this.get('frameNum') < 7) {
        this.incrementProperty('frameNum');
      }
      else {
         this.set('frameNum', 0);
      }
    }
  }
});
