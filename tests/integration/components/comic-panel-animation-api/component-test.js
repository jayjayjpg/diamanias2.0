import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('comic-panel-animation-api', 'Integration | Component | comic panel animation api', {
  integration:  true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{comic-panel-animation-api}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#comic-panel-animation-api}}
      template block text
    {{/comic-panel-animation-api}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
