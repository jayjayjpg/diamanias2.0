import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('dynamic-color-bg', 'Integration | Component | dynamic color bg', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{dynamic-color-bg}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#dynamic-color-bg}}
      template block text
    {{/dynamic-color-bg}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
