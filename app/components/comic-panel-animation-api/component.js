import Ember from 'ember';

export default Ember.Component.extend({
  classNames: ['panel','comic-panel', 'comic-panel-animation-api'],
  attributeBindings: ['id:customId'],
  customId: 'animation-api-panel',
  timeline: document.timeline,
  animations: Ember.computed('timeline', function() {
    return this.get('timeline').getAnimations();
  }),
  playAnimation() {
    this.get('animations').forEach((animation) => {
      animation.play();
    });
  },
  pauseAnimation() {
    this.get('animations').forEach((animation) => {
      animation.pause();
    });
  },
  isPlaying: true,
  actions: {
    play() {
      console.log("play it");
      this.set('isPlaying', true);
      this.playAnimation();
    },

    pause() {
      console.log("pause it");
      this.set('isPlaying', false);
      this.pauseAnimation();
    }

  }
});
