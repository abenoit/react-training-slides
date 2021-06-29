'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.marksy = marksy;

exports.default = function (options) {
  return marksy(options);
};

var _createRenderer = require('./createRenderer');

var _createRenderer2 = _interopRequireDefault(_createRenderer);

var _marked = require('marked');

var _marked2 = _interopRequireDefault(_marked);

var _babelStandalone = require('babel-standalone');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function marksy() {
  var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

  options.components = options.components || {};

  function CodeComponent(props) {
    return options.createElement('pre', null, options.createElement('code', {
      className: 'language-' + props.language,
      dangerouslySetInnerHTML: { __html: options.highlight ? options.highlight(props.language, props.code) : props.code }
    }));
  }

  var tracker = {
    tree: null,
    elements: null,
    nextElementId: null,
    toc: null,
    currentId: []
  };
  var renderer = (0, _createRenderer2.default)(tracker, options, {
    html: function html(_html) {
      try {
        var code = (0, _babelStandalone.transform)(_html, {
          presets: ['react']
        }).code;
        var components = Object.keys(options.components).map(function (key) {
          return options.components[key];
        });
        var mockedReact = {
          createElement: function createElement(tag) {
            var props = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

            var componentProps = components.indexOf(tag) >= 0 ? Object.assign(props || {}, { key: tracker.nextElementId++, context: tracker.context }) : props;

            for (var _len = arguments.length, children = Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
              children[_key - 2] = arguments[_key];
            }

            return options.createElement(tag, componentProps, children);
          }
        };

        tracker.tree.push(new (Function.prototype.bind.apply(Function, [null].concat(['React'], _toConsumableArray(Object.keys(options.components)), ['return ' + code])))().apply(undefined, [mockedReact].concat(_toConsumableArray(components))) || null);
      } catch (e) {}
    },
    code: function code(_code, language) {
      if (language === 'marksy') {
        return renderer.html(_code);
      } else {
        var elementId = tracker.nextElementId++;

        tracker.elements[elementId] = options.createElement(options.elements && options.elements.code || CodeComponent, { key: elementId, code: _code, language: language });

        tracker.tree.push(tracker.elements[elementId]);

        return '{{' + elementId + '}}';
      }
    }
  });

  return function compile(content) {
    var markedOptions = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    var context = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

    tracker.tree = [];
    tracker.elements = {};
    tracker.toc = [];
    tracker.nextElementId = 0;
    tracker.context = context;
    tracker.currentId = [];
    (0, _marked2.default)(content, Object.assign({ renderer: renderer, smartypants: true }, markedOptions));

    return { tree: tracker.tree, toc: tracker.toc };
  };
}

;
//# sourceMappingURL=components.js.map