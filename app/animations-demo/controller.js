import Ember from 'ember';
//import moment from 'moment/src/moment';
//import { moment as momentModule } from 'moment';
import momentModule from 'npm:moment';

export default Ember.Controller.extend({
  panelItems: {
    fgContent: 'in the front',
    bgComponent: 'comic-character',
    bgKeys: [
      { backgroundPosition: '0 0' },
      { backgroundPosition: '-1200px 0' }
    ],
    bgClass: 'moving-background',
    bgImage: '/img/desert.jpg',
    characterComponent: 'comic-character',
    charImage: '/img/walkingdemo-sprite.png',
    charClass: 'comic-panel__foreground__character',
    charKeys:  [
      { backgroundPosition: '0 0' },
      { backgroundPosition: '-1350px 0' }
    ],  // TODO: create my own panel object class which can be modified with classname and component type
    animationOptions: {
      duration: 500,
      easing: 'steps(9, end)',
      iterations: 'Infinity'
    }
 },
 layers: [
    {
      layerType: 'comic-character-timelined',
      layerKeys: [
        { backgroundPosition: '0 0' },
        { backgroundPosition: '-1200px 0' }
      ],
      layerClass: 'moving-background',
      layerImage: '/img/f2.png'
     },
    {
      layerType: 'comic-character-timelined',
      layerImage: '/img/walkingdemo-sprite.png',
      layerClass: 'comic-panel__foreground__character',
      layerKeys:  [
        { backgroundPosition: '0 0' },
        { backgroundPosition: '-1350px 0' }
      ],  // TODO: create my own panel object class which can be modified with classname and component type
      animationOptions: {
        duration: 500,
        easing: 'steps(9, end)',
        iterations: 'Infinity'
      }
   }
 ]
});
