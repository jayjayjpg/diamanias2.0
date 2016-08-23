(function(){
  function fakeTimelineMax(){
    var error = "TimelineMax is not available. The bower package seems to be missing.";
    this.to = function(){
      throw Error(error);
    };
    throw Error(error);
  }

  function vendorModule(){
    'use strict';
    return { default: self['TimelineMax'] || fakeTimelineMax };
  }

  define('timelinemax', [], vendorModule);

})();
