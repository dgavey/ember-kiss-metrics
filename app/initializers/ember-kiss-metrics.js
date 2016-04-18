export function initialize() {
  let application = arguments[1] || arguments[0];
  if (arguments[1]) {
    //for ember 1.x
    const container = arguments[0];
    container.options('kmq:main'); 
  }
  application.inject('controller', '_kmq', 'kmq:main');
  application.inject('route',      '_kmq', 'kmq:main');
};

export default {
  name: 'ember-kiss-metrics',

  initialize: initialize
};
