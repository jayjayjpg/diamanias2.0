import Ember from 'ember';

export default Ember.Component.extend({
  classNames: ['moving-lines'],
  tagName: 'article',
  listTrick: Ember.computed(function(){
    return "................................................".split(".");
  }),
  innerText: Ember.computed(function(){
    let bases = ["T","G","A","C"];
    let seq = "";
    function getBases(arr,times){
      while (times > 0){
        seq += arr[Math.floor(Math.random() * 4)];
        times -= 1;
      }
      return seq;
    }
    return getBases(bases,230);
  })
});
