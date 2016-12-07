import Ember from 'ember';

export default Ember.Component.extend({
  classNames: ['dynamic-color-bg'],
  colorBlocks: Ember.computed(function(){
    return "0123456789abcdef".split("");
  }),
  floorColor: null,
  topColor: null,
  percentage: null,
  attributeBindings: ['colorStyle:style'],
  currentColor: Ember.computed('percentage', function(){
    let floorColor = this.get('floorColor');
    let topColor = this.get('topColor');
    let topCBlocks = topColor.slice(1).split("");
    let floorCBlocks = floorColor.slice(1).split("");
    let percentage = this.get('percentage');

    let topColorNums = this.hexaToNum(topCBlocks);
    let floorColorNums = this.hexaToNum(floorCBlocks);

    let weightedColorNums = floorColorNums.map(function(el, index){
      let amount = percentage;
      return  Math.floor(parseInt(el) * amount + parseInt(topColorNums[index]) * (1 - amount) );
    });
    let weightedCBlocks = this.numToHexa(weightedColorNums);

    return "#" + weightedCBlocks.join("");
   // return topColor; // TODO: calculate intermediate color from top and floor to be returned
  }),
  colorStyle: Ember.computed('currentColor', function(){
    return new Ember.Handlebars.SafeString(`background-color: ${this.get('currentColor')}`);
  }),
  hexaToNum(arr){
    // seriously, who needs hexadecimal string functions when you can have your own hexadecimal array in which you look up the representation of your number
    let colorBlocks = this.get('colorBlocks');
    return arr.map(function(el){
      let num = colorBlocks.indexOf(el);
      if (num < 10){
        return "0" + num;
      }
      return num;
    });
  },
  numToHexa(arr){
    let colorBlocks = this.get('colorBlocks');
    return arr.map(function(el){
      return colorBlocks[parseInt(el)];
    });
  }
});
