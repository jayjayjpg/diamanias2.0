import Ember from 'ember';

export default Ember.Component.extend({
  classNames: ['medium material-icons'],
  classNameBindings: ['isPlaying:playing'],
  tagName: 'i',
  isPlaying: false,
  click(){
    console.log("click playbutton");
    this.set('isPlaying', !this.get('isPlaying'));
    if (this.get('isPlaying')){
      this.get('primaryAction')();
    }
    else {
      this.get('secondaryAction')();
    }
  }
});
