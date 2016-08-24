(function(){
  function fakeTimelineMax(){
    var error = "TimelineMax is not available. The bower package seems to be missing.";
    this.to = function(){
      throw Error(error);
    };
    throw Error(error);
  }

  function fakeTweenMax(){
    var tweenError = "TweenMax is not available. The bower package seems to be missing.";
    this.to = function(){
      throw Error(error);
    };
    throw Error(error);
  }

  function vendorModule(){
    'use strict';
    return { 
      Timeline: self['TimelineMax'] || fakeTimelineMax,
      Tween: self['TweenMax'] || fakeTweenMax
    };
  }

  define('gsap-shim', [], vendorModule);

})();
