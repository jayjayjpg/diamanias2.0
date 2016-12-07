import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('counting-clock', 'Integration | Component | counting clock', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  // Template block usage:
  this.render(hbs`
    {{#counting-clock}}
      template block text
    {{/counting-clock}}
  `);

  assert.ok(this.$().text().indexOf('template block text') > -1, 'yield renders in block of component');
});

test('it manages time', function(assert){
  this.render(hbs`
    {{counting-clock}}
  `);
  
  assert.ok(this.$('.digit').first() > 0, 'hours counters contains a number larger than 0'); // TODO: check for digit rendering
});
