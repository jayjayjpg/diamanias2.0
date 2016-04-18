import Ember from 'ember';

export default Ember.Component.extend({
  classNames: ['moving-lines'],
  tagName: 'article',
  innerTexts: Ember.computed(function(){
    let bases = ["T","G","A","C"];
    let allLines = [];
    function getBases(arr,len,lines){
      while (lines > 0){
        let seq = "";
        for (var i = len; i > 0; i -= 1){
          seq += arr[Math.floor(Math.random() * 4)];
        }
        allLines.push(seq);
        lines -= 1;
      }
      return allLines;
    }
    return getBases(bases,230,40);
  })
});
