import config from '../config/environment';

var kmq = window._kmq = window.kmq || [];

function _kms(u) {
  setTimeout(function() {
    var d = document, f = d.getElementsByTagName('script')[0];
    var s = d.createElement('script');

    s.type = 'text/javascript';
    s.async = true;
    s.src = u;

    f.parentNode.insertBefore(s, f);
  }, 1);
}

export var initialize = function(container, application) {
  _kms('//i.kissmetrics.com/i.js');
  _kms('//doug1izaerwt3.cloudfront.net/' + config.kissmetricsKey + '.1.js')

  var set = {
    'Screen Resolution' : screen.width + " x " + screen.height,
    'User Agent': navigator.userAgent
  };

  // TODO: make this info more configurable

  if (typeof bowser === 'object' && bowser) {
    set.Browser = bowser.name + ' ' + bowser.version;
  }

  kmq.push([ 'set', set ]);

  container.register('kmq:main', {
    create: function() {
      return kmq;
    }
  });

  application.inject('controller', '_kmq', 'kmq:main');
  application.inject('route',      '_kmq', 'kmq:main');
};

export default {
  name: 'ember-kiss-metrics:initializer',

  initialize: initialize
};
