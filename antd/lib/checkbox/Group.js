"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var React = _interopRequireWildcard(require("react"));

var PropTypes = _interopRequireWildcard(require("prop-types"));

var _reactLifecyclesCompat = require("react-lifecycles-compat");

var _classnames = _interopRequireDefault(require("classnames"));

var _shallowequal = _interopRequireDefault(require("shallowequal"));

var _omit = _interopRequireDefault(require("omit.js"));

var _Checkbox = _interopRequireDefault(require("./Checkbox"));

var _configProvider = require("../config-provider");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj["default"] = obj; return newObj; } }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var __rest = void 0 && (void 0).__rest || function (s, e) {
  var t = {};

  for (var p in s) {
    if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
  }

  if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
    if (e.indexOf(p[i]) < 0) t[p[i]] = s[p[i]];
  }
  return t;
};

var CheckboxGroup =
/*#__PURE__*/
function (_React$Component) {
  _inherits(CheckboxGroup, _React$Component);

  function CheckboxGroup(props) {
    var _this;

    _classCallCheck(this, CheckboxGroup);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(CheckboxGroup).call(this, props));

    _this.registerValue = function (value) {
      _this.setState(function (_ref) {
        var registeredValues = _ref.registeredValues;
        return {
          registeredValues: [].concat(_toConsumableArray(registeredValues), [value])
        };
      });
    };

    _this.cancelValue = function (value) {
      _this.setState(function (_ref2) {
        var registeredValues = _ref2.registeredValues;
        return {
          registeredValues: registeredValues.filter(function (val) {
            return val !== value;
          })
        };
      });
    };

    _this.toggleOption = function (option) {
      var registeredValues = _this.state.registeredValues;

      var optionIndex = _this.state.value.indexOf(option.value);

      var value = _toConsumableArray(_this.state.value);

      if (optionIndex === -1) {
        value.push(option.value);
      } else {
        value.splice(optionIndex, 1);
      }

      if (!('value' in _this.props)) {
        _this.setState({
          value: value
        });
      }

      var onChange = _this.props.onChange;

      if (onChange) {
        onChange(value.filter(function (val) {
          return registeredValues.indexOf(val) !== -1;
        }));
      }
    };

    _this.renderGroup = function (_ref3) {
      var getPrefixCls = _ref3.getPrefixCls;

      var _assertThisInitialize = _assertThisInitialized(_this),
          props = _assertThisInitialize.props,
          state = _assertThisInitialize.state;

      var customizePrefixCls = props.prefixCls,
          className = props.className,
          style = props.style,
          options = props.options,
          restProps = __rest(props, ["prefixCls", "className", "style", "options"]);

      var prefixCls = getPrefixCls('checkbox', customizePrefixCls);
      var groupPrefixCls = "".concat(prefixCls, "-group");
      var domProps = (0, _omit["default"])(restProps, ['children', 'defaultValue', 'value', 'onChange', 'disabled']);
      var children = props.children;

      if (options && options.length > 0) {
        children = _this.getOptions().map(function (option) {
          return React.createElement(_Checkbox["default"], {
            prefixCls: prefixCls,
            key: option.value.toString(),
            disabled: 'disabled' in option ? option.disabled : props.disabled,
            value: option.value,
            checked: state.value.indexOf(option.value) !== -1,
            onChange: option.onChange,
            className: "".concat(groupPrefixCls, "-item")
          }, option.label);
        });
      }

      var classString = (0, _classnames["default"])(groupPrefixCls, className);
      return React.createElement("div", _extends({
        className: classString,
        style: style
      }, domProps), children);
    };

    _this.state = {
      value: props.value || props.defaultValue || [],
      registeredValues: []
    };
    return _this;
  }

  _createClass(CheckboxGroup, [{
    key: "getChildContext",
    value: function getChildContext() {
      return {
        checkboxGroup: {
          toggleOption: this.toggleOption,
          value: this.state.value,
          disabled: this.props.disabled,
          name: this.props.name,
          // https://github.com/ant-design/ant-design/issues/16376
          registerValue: this.registerValue,
          cancelValue: this.cancelValue
        }
      };
    }
  }, {
    key: "shouldComponentUpdate",
    value: function shouldComponentUpdate(nextProps, nextState) {
      return !(0, _shallowequal["default"])(this.props, nextProps) || !(0, _shallowequal["default"])(this.state, nextState);
    }
  }, {
    key: "getOptions",
    value: function getOptions() {
      var options = this.props.options; // https://github.com/Microsoft/TypeScript/issues/7960

      return options.map(function (option) {
        if (typeof option === 'string') {
          return {
            label: option,
            value: option
          };
        }

        return option;
      });
    }
  }, {
    key: "render",
    value: function render() {
      return React.createElement(_configProvider.ConfigConsumer, null, this.renderGroup);
    }
  }], [{
    key: "getDerivedStateFromProps",
    value: function getDerivedStateFromProps(nextProps) {
      if ('value' in nextProps) {
        return {
          value: nextProps.value || []
        };
      }

      return null;
    }
  }]);

  return CheckboxGroup;
}(React.Component);

CheckboxGroup.defaultProps = {
  options: []
};
CheckboxGroup.propTypes = {
  defaultValue: PropTypes.array,
  value: PropTypes.array,
  options: PropTypes.array.isRequired,
  onChange: PropTypes.func
};
CheckboxGroup.childContextTypes = {
  checkboxGroup: PropTypes.any
};
(0, _reactLifecyclesCompat.polyfill)(CheckboxGroup);
var _default = CheckboxGroup;
exports["default"] = _default;
module.exports = exports.default;