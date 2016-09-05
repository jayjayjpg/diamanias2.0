import DS from 'ember-data';

export default DS.Model.extend({
  bgImg: DS.attr('string'),
  bgImg2: DS.attr('string'),
  column: DS.attr('string'),
  speech: DS.attr('string'),
  property1: DS.attr('string'),
  panelType: DS.attr('string'),
  height: DS.attr('number'),
  bgSize: DS.attr('number'),
  frameNum: DS.attr('number')
});
