import Ember from 'ember';
/* global moment */

export default Ember.Component.extend({
  classNames: ['counting-clock'],
  didInsertElement(){
    this.loop();
  },
  currentTime: Ember.computed(function(){
    return moment();
  }),
  releaseTime: Ember.computed(function(){
    return moment("20170117", "YYYYMMDD");
  }),
  differenceTime: Ember.computed('currentTime', 'releaseTime', function(){
    return moment(this.get('releaseTime'),"YYYYMMDD").diff(this.get('currentTime'));
  }),
  differenceDuration: Ember.computed('differenceTime', function(){
    return moment.duration(this.get('differenceTime'));
  }),
  elapsingDays: Ember.computed('elapsing', function(){
    return Math.floor(this.get('differenceDuration').asDays());
  }),
  elapsingHours: Ember.computed('differenceTime', function(){
    return moment.utc(this.get('differenceTime')).format("hh");
  }),
  elapsingMins: Ember.computed('differenceTime', function(){
    return moment.utc(this.get('differenceTime')).format("mm");
  }),
  elapsingSecs: Ember.computed('differenceTime', function(){
    return moment.utc(this.get('differenceTime')).format("ss");
  }),
  /* elapsingFracs: Ember.computed('differenceTime', function(){
    return moment.utc(this.get('differenceTime')).format("SS");
  }), */
  loop(){
    let current = moment();
    this.set('currentTime', current);
    this.ticking();
    Ember.run.later(this, this.loop, 100);
  },
  ticking(){
    if (this.get('onTicking') !== undefined){
    // trigger action on route's controller for the timeUpdate
      this.get('onTicking')(this.get('currentTime'));
    }
  }
 
});
