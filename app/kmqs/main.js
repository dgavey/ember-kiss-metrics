import config from '../config/environment';

var kmq = window._kmq = window.kmq || [];

function load(u) {
  setTimeout(function() {
    var d = document, f = d.getElementsByTagName('script')[0];
    var s = d.createElement('script');

    s.type = 'text/javascript';
    s.async = true;
    s.src = u;

    f.parentNode.insertBefore(s, f);
  }, 1);
}

if (config.kissmetricsKey) {
  load('//i.kissmetrics.com/i.js');
  load('//doug1izaerwt3.cloudfront.net/' + config.kissmetricsKey + '.1.js')
} else {
  throw new TypeError('Missing config/environment entry `config.kissmetricsKey`');
}

var set = {
  'Screen Resolution' : window.screen.width + " x " + window.screen.height,
  'User Agent': window.navigator.userAgent
};

// TODO: make this info more configurable

if (typeof bowser === 'object' && bowser) {
  set.Browser = bowser.name + ' ' + bowser.version;
}

kmq.push([ 'set', set ]);

export default {
  create:  function () { return kmq; },
  destroy: function () { }
};
