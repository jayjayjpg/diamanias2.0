import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('/comic-panel-woosh', 'Integration | Component | comic panel woosh', {
  integration: true
});

test('it renders', function(assert) {
  assert.expect(2);

  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{comic-panel-woosh}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#comic-panel-woosh}}
      template block text
    {{/comic-panel-woosh}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
