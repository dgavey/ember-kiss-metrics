export function initialize() {
  if (typeof FastBoot === 'undefined') {
    // only execute this in browser
    let application = arguments[0];
    if (arguments.length === 2) {
      //for ember 1.x
      const container = arguments[0];
      application =  arguments[1];
      container.options('kmq:main');
    }
    application.inject('controller', '_kmq', 'kmq:main');
    application.inject('route',      '_kmq', 'kmq:main');
  }
};

export default {
  name: 'ember-kiss-metrics',

  initialize: initialize
};
