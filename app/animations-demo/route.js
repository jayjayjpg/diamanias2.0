import Ember from 'ember';

const panelData = [
  {id: 2,
   bgImg: '/url/here',
   fgImg: 'url/here2',
   panelType: 'comic-panel-movie',
   columnClass: 's12',
   height: 400,
   bgSize: 1000,
   frameNum: 5,
  },
  {id: 3,
   bgImg: 'https://s3.eu-central-1.amazonaws.com/diamanias-storage/dthsprite.png',
   fgImg: 'https://s3.eu-central-1.amazonaws.com/diamanias-storage/dthsprite.png',
   panelType: 'comic-panel-slot',
   columnClass: 's12',
   height: 400,
   bgSize: 1000,
   frameNum: 10,
  },
  {id: 4,
   bgImg: 'https://s3.eu-central-1.amazonaws.com/diamanias-storage/dthsprite.png',
   fgImg: 'https://s3.eu-central-1.amazonaws.com/diamanias-storage/dthsprite.png',
   panelType: 'comic-panel-movie',
   columnClass: 's12',
   height: 600,
   bgSize: 4400,
   frameNum: 10,
  },
  {id: 5,
   panelType: 'comic-panel-processing',
   columnClass: 's12'
  }
];

export default Ember.Route.extend({
  model(params){
    return panelData;
  }
});
