import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('comic-character-timelined', 'Integration | Component | comic character timelined', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{comic-character-timelined}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#comic-character-timelined}}
      template block text
    {{/comic-character-timelined}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
