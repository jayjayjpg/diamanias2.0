import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('/comic-panel-movie', 'Integration | Component | comic panel movie', {
  integration: true
});

test('it renders', function(assert) {
  
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });" + EOL + EOL +

  this.render(hbs`{{comic-panel-movie}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:"
  this.render(hbs`
    {{#comic-panel-movie}}
      template block text
    {{/comic-panel-movie}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
