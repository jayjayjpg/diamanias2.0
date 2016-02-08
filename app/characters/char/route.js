import Ember from 'ember';

export default Ember.Route.extend({
  model(params){
    let { char_id } = params;
    return this.store.query('char', {
      orderBy: 'slug',
      equalTo: char_id
    })
    .then(characters => {
      return characters.get('firstObject');
    })
    .catch( (error) => {
      console.log(error);
    });
  }
});
