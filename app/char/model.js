import DS from 'ember-data';

export default DS.Model.extend({
  title: DS.attr('string'),
  summary: DS.attr('string'),
  introImg: DS.attr(),
  body: DS.attr('string'),
  slug: DS.attr('string'),
  url: DS.attr('string')
});
