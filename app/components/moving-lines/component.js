import Ember from 'ember';

export default Ember.Component.extend({
  classNames: ['moving-lines'],
  tagName: 'article',
  appendingLetter: "T",
  currentSeq: "",
  seqLen: 80,
  text: Ember.computed('appendingLetter', function(){
    let prolongedSeq = this.get('currentSeq') + this.get('appendingLetter');
    this.set('currentSeq', prolongedSeq);
    console.log("change text: " + prolongedSeq);
    let self = this;
    return prolongedSeq;
  }),
  getBases: function(){
    const bases = ["T","G","A","C"];
    return bases[Math.floor(Math.random() * 4)];
  },
  writeBases: function(){
    let self = this;
    let newLetter;
    newLetter = self.getBases();
    self.set('appendingLetter', newLetter);
    console.log("appending letter " +  self.get("appendingLetter"));
  },
  didInsertElement(){
      let self = this;
      for (var i = 0; i < this.get('seqLen'); i += 1){
        Ember.run.later(function(){
          self.writeBases();
        }, 50 * i);
      }
  }
});
