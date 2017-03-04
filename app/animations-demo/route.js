import Ember from 'ember';

const panelData = [
  {id: 1,
   bgImg: 'img/dthsprite.png',
   fgImg: 'img/dthsprite.png',
   panelType: 'comic-panel-slot',
   columnClass: 's12',
   height: 400,
   bgSize: 1000,
   frameNum: 10,
  },
  {id: 2,
   bgImg: 'img/dthsprite.png',
   fgImg: 'img/dthsprite.png',
   panelType: 'comic-panel-movie',
   columnClass: 's12',
   height: 400,
   bgSize: 2800,
   frameNum: 6,
  },
  {id: 3,
   bgImg: 'img/dthsprite.png',
   fgImg: 'img/dthsprite.png',
   panelType: 'comic-panel-canvas',
   columnClass: 's12'
  }
];

export default Ember.Route.extend({
  model(){
    return panelData;
  }
});
