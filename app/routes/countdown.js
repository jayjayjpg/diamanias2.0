import Ember from 'ember';

export default Ember.Route.extend({
  model(){
    let months = "January,February,March,April,May,June,July,August,September,October,November,December".split(",");
    let date = new Date();
    let dateRelease = new Date('January 17, 2017 00:00:01')
    let elapsing = dateRelease - date;
    return {
      cur: {
        currentTime: date,
        day: date.getDate(),
        month: date.getMonth(),
        year: date.getFullYear(),
        hour: date.getHours(),
        min: date.getMinutes(),
        sec: date.getSeconds()
      },
      cd: {
        elapsing: elapsing,
        day: dateRelease.getDate(),
        month: months[dateRelease.getMonth()],
        year: dateRelease.getFullYear(),
        hour: dateRelease.getHours(),
        min: dateRelease.getMinutes(),
        sec: dateRelease.getSeconds()
      }
    }
  }
});
