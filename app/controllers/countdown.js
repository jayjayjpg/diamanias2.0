import Ember from 'ember';

export default Ember.Controller.extend({
  init(){
    this._super(...arguments);
    this.loop();
  },
  currentTime: '20161205',
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
  loop(){
    let current = moment();
    this.set('currentTime', current);
    Ember.run.later(this, this.loop, 250);
  }
});
