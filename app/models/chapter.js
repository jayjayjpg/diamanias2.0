import DS from 'ember-data';

export default DS.Model.extend({
  chapterIndex: DS.attr('number'),
  title: DS.attr('string')
});
