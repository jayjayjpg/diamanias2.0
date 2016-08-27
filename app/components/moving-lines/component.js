import Ember from 'ember';

export default Ember.Component.extend({
  classNames: ['moving-lines'],
  tagName: 'article',
  appendingLetter: "T",
  currentSeq: "",
  seqLen: 80,
  count: 1,
  init(){
    this._super(...arguments);
    this.writeBases();
  },
  text: Ember.computed('appendingLetter', function(){
    let prolongedSeq = this.get('currentSeq') + this.get('appendingLetter');
    this.set('currentSeq', prolongedSeq);
    this.set('count', this.get('count') + 1);
    return prolongedSeq;
  }),
  getBases: function(){
    const bases = ["T","G","A","C"];
    return bases[Math.floor(Math.random() * 4)];
  },
  writeBases: Ember.observer('count', function(){
   if (!(this.get('isDestroyed') || this.get('isDestroying'))){
      let self = this;
      let newLetter;
      if (this.get('count') < this.get('seqLen')){
        Ember.run.later(function(){
          self.set('appendingLetter', 'N'); // reset the appendingLetter prop to a random value so the newLetter value will definitely be different from the former randomly selected one. Hack to make this.set() execute
          newLetter = self.getBases();
          self.set('appendingLetter', newLetter);
          console.log(self.get('count') + ": appending letter " +  self.get("appendingLetter"));
        }, 20);
      }
   }
  })
});
