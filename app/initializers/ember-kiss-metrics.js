export function initialize(application) {
  application.inject('controller', '_kmq', 'kmq:main');
  application.inject('route',      '_kmq', 'kmq:main');
};

export default {
  name: 'ember-kiss-metrics',

  initialize: initialize
};
