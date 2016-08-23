import Ember from 'ember';

export default Ember.Route.extend({
  model(params){
    let { char_id } = params;
    /* return this.store.query('char', {
      orderBy: 'slug',
      equalTo: char_id
    }) */
    return new Promise(
       function(resolve, reject){
         window.setTimeout(
           function(){
             resolve(true);
           }, Math.random() * 5000 + 2000);
       }
    )
    .then(/* characters => {
      return characters.get('firstObject');
    }*/
      () => {console.log("loaded");}
    )
    .catch( (error) => {
      console.log(error);
    });
  }
});
