'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = getAutocompleteValues;

var _tabletop = require('tabletop');

var _tabletop2 = _interopRequireDefault(_tabletop);

var _lodash = require('lodash');

var _lodash2 = _interopRequireDefault(_lodash);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function getAutocompleteValues(key) {
  var _this = this;

  return new Promise(function (resolve, _reject) {
    var tabletopConfig = {
      key: key,
      debug: true,
      callback: function callback() {
        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
          args[_key] = arguments[_key];
        }

        return setAutocompleteValues.apply(undefined, [resolve].concat(args));
      },
      callbackContext: _this
    };

    _tabletop2.default.init(tabletopConfig);
  });
}

function setAutocompleteValues(resolve, __, tabletop) {
  var rows = tabletop.sheets('Master Data Elements').all();

  var map = {};
  _lodash2.default.each(rows, function (row) {
    var id = row['Dynamic Attribute Input ID'];
    var values = row['Normalized Input Values'];

    if (id && values && !map[id]) {
      map[id] = values.split('|');
    }
  });

  resolve(map);
}