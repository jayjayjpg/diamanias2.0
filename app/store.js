import DS from 'ember-data';

export default DS.Store.extend({
  init(){
    return this._super.apply(this, arguments);
  },
  findOne: function() {
    return this.find.apply(this, arguments).then(function(results) {
      return results.objectAt(0);
    });
  }
});