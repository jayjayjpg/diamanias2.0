import DS from 'ember-data';

export default DS.Model.extend({
  title: DS.attr('string'),
  summary: DS.attr('string'),
  headShot: DS.attr('string'),
  fullView: DS.attr('string'),
  body: DS.attr('string'),
  slug: DS.attr('string'),
  url: DS.attr('string')
});
