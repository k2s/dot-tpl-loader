var dot    = require('dot');
var assign = require('object-assign');
var utils  = require('loader-utils');

module.exports = function (content) {
    this.cacheable && this.cacheable();

    var options = utils.parseQuery(this.query);

    options = assign({}, dot.templateSettings, {
        selfcontained: true
    }, options);

    return 'module.exports = (function () {\n' +
        '  var fn = ' + dot.template(content, options) + ';\n' +
        '  fn.render = fn;\n' +
        '  return fn;\n'+
        '})();';
};
