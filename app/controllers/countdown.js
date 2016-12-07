import Ember from 'ember';
/* global moment */

export default Ember.Controller.extend({
  init(){
    this._super(...arguments);
  },
  startTime: Ember.computed(function(){
    return moment("20161205");
  }),
  releaseTime: Ember.computed(function(){
    return moment("20170117");
  }),
  maxTime: Ember.computed(function(){
    return this.get('releaseTime').diff(this.get('startTime'), 'days');
  }),
  timeRemaining: Ember.computed('currentTime', function(){
    return this.get('releaseTime').diff(this.get('currentTime'), 'days');
  }),
  percents: Ember.computed('timeRemaining', function(){
    let res = this.get('timeRemaining') / this.get('maxTime');
    res =  res * 10 / 10; // round number to one decimal
    return res;
  }),
  actions: {
    timeUpdate(timesObj){
      this.set('currentTime', timesObj);
    }
  }
});
