'use strict';

exports.__esModule = true;

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _objectWithoutProperties2 = require('babel-runtime/helpers/objectWithoutProperties');

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _enhancer = require('./enhancer');

var _enhancer2 = _interopRequireDefault(_enhancer);

var _types = require('./types');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

/* eslint react/prop-types: 0 */
var Circle = function (_Component) {
  (0, _inherits3['default'])(Circle, _Component);

  function Circle() {
    var _temp, _this, _ret;

    (0, _classCallCheck3['default'])(this, Circle);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3['default'])(this, _Component.call.apply(_Component, [this].concat(args))), _this), _this.paths = {}, _temp), (0, _possibleConstructorReturn3['default'])(_this, _ret);
  }

  Circle.prototype.getPathStyles = function getPathStyles(offset, percent, strokeColor, strokeWidth) {
    var gapDegree = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : 0;
    var gapPosition = arguments[5];

    var radius = 50 - strokeWidth / 2;
    var beginPositionX = 0;
    var beginPositionY = -radius;
    var endPositionX = 0;
    var endPositionY = -2 * radius;
    switch (gapPosition) {
      case 'left':
        beginPositionX = -radius;
        beginPositionY = 0;
        endPositionX = 2 * radius;
        endPositionY = 0;
        break;
      case 'right':
        beginPositionX = radius;
        beginPositionY = 0;
        endPositionX = -2 * radius;
        endPositionY = 0;
        break;
      case 'bottom':
        beginPositionY = radius;
        endPositionY = 2 * radius;
        break;
      default:
    }
    var pathString = 'M 50,50 m ' + beginPositionX + ',' + beginPositionY + '\n     a ' + radius + ',' + radius + ' 0 1 1 ' + endPositionX + ',' + -endPositionY + '\n     a ' + radius + ',' + radius + ' 0 1 1 ' + -endPositionX + ',' + endPositionY;
    var len = Math.PI * 2 * radius;

    var pathStyle = {
      stroke: strokeColor,
      strokeDasharray: percent / 100 * (len - gapDegree) + 'px ' + len + 'px',
      strokeDashoffset: '-' + (gapDegree / 2 + offset / 100 * (len - gapDegree)) + 'px',
      transition: 'stroke-dashoffset .3s ease 0s, stroke-dasharray .3s ease 0s, stroke .3s, stroke-width .06s ease .3s' // eslint-disable-line
    };

    return {
      pathString: pathString,
      pathStyle: pathStyle
    };
  };

  Circle.prototype.getStokeList = function getStokeList() {
    var _this2 = this;

    var _props = this.props,
        prefixCls = _props.prefixCls,
        percent = _props.percent,
        strokeColor = _props.strokeColor,
        strokeWidth = _props.strokeWidth,
        strokeLinecap = _props.strokeLinecap,
        gapDegree = _props.gapDegree,
        gapPosition = _props.gapPosition;

    var percentList = Array.isArray(percent) ? percent : [percent];
    var strokeColorList = Array.isArray(strokeColor) ? strokeColor : [strokeColor];

    var stackPtg = 0;
    return percentList.map(function (ptg, index) {
      var color = strokeColorList[index] || strokeColorList[strokeColorList.length - 1];

      var _getPathStyles = _this2.getPathStyles(stackPtg, ptg, color, strokeWidth, gapDegree, gapPosition),
          pathString = _getPathStyles.pathString,
          pathStyle = _getPathStyles.pathStyle;

      stackPtg += ptg;

      return _react2['default'].createElement('path', {
        key: index,
        className: prefixCls + '-circle-path',
        d: pathString,
        strokeLinecap: strokeLinecap,
        strokeWidth: ptg === 0 ? 0 : strokeWidth,
        fillOpacity: '0',
        style: pathStyle,
        ref: function ref(path) {
          _this2.paths[index] = path;
        }
      });
    });
  };

  Circle.prototype.render = function render() {
    var _props2 = this.props,
        prefixCls = _props2.prefixCls,
        strokeWidth = _props2.strokeWidth,
        trailWidth = _props2.trailWidth,
        gapDegree = _props2.gapDegree,
        gapPosition = _props2.gapPosition,
        trailColor = _props2.trailColor,
        strokeLinecap = _props2.strokeLinecap,
        style = _props2.style,
        className = _props2.className,
        restProps = (0, _objectWithoutProperties3['default'])(_props2, ['prefixCls', 'strokeWidth', 'trailWidth', 'gapDegree', 'gapPosition', 'trailColor', 'strokeLinecap', 'style', 'className']);

    var _getPathStyles2 = this.getPathStyles(0, 100, trailColor, strokeWidth, gapDegree, gapPosition),
        pathString = _getPathStyles2.pathString,
        pathStyle = _getPathStyles2.pathStyle;

    delete restProps.percent;
    delete restProps.strokeColor;
    return _react2['default'].createElement(
      'svg',
      (0, _extends3['default'])({
        className: prefixCls + '-circle ' + className,
        viewBox: '0 0 100 100',
        style: style
      }, restProps),
      _react2['default'].createElement('path', {
        className: prefixCls + '-circle-trail',
        d: pathString,
        stroke: trailColor,
        strokeLinecap: strokeLinecap,
        strokeWidth: trailWidth || strokeWidth,
        fillOpacity: '0',
        style: pathStyle
      }),
      this.getStokeList()
    );
  };

  return Circle;
}(_react.Component);

Circle.propTypes = (0, _extends3['default'])({}, _types.propTypes, {
  gapPosition: _propTypes2['default'].oneOf(['top', 'bottom', 'left', 'right'])
});

Circle.defaultProps = (0, _extends3['default'])({}, _types.defaultProps, {
  gapPosition: 'top'
});

exports['default'] = (0, _enhancer2['default'])(Circle);
module.exports = exports['default'];