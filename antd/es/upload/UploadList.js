function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

import * as React from 'react';
import Animate from 'rc-animate';
import classNames from 'classnames';
import { previewImage, isImageUrl } from './utils';
import Icon from '../icon';
import Tooltip from '../tooltip';
import Progress from '../progress';
import { ConfigConsumer } from '../config-provider';

var UploadList =
/*#__PURE__*/
function (_React$Component) {
  _inherits(UploadList, _React$Component);

  function UploadList() {
    var _this;

    _classCallCheck(this, UploadList);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(UploadList).apply(this, arguments));

    _this.handleClose = function (file) {
      var onRemove = _this.props.onRemove;

      if (onRemove) {
        onRemove(file);
      }
    };

    _this.handlePreview = function (file, e) {
      var onPreview = _this.props.onPreview;

      if (!onPreview) {
        return;
      }

      e.preventDefault();
      return onPreview(file);
    };

    _this.renderUploadList = function (_ref) {
      var _classNames2;

      var getPrefixCls = _ref.getPrefixCls;
      var _this$props = _this.props,
          customizePrefixCls = _this$props.prefixCls,
          _this$props$items = _this$props.items,
          items = _this$props$items === void 0 ? [] : _this$props$items,
          listType = _this$props.listType,
          showPreviewIcon = _this$props.showPreviewIcon,
          showRemoveIcon = _this$props.showRemoveIcon,
          locale = _this$props.locale;
      var prefixCls = getPrefixCls('upload', customizePrefixCls);
      var list = items.map(function (file) {
        var _classNames;

        var progress;
        var icon = React.createElement(Icon, {
          type: file.status === 'uploading' ? 'loading' : 'paper-clip'
        });

        if (listType === 'picture' || listType === 'picture-card') {
          if (listType === 'picture-card' && file.status === 'uploading') {
            icon = React.createElement("div", {
              className: "".concat(prefixCls, "-list-item-uploading-text")
            }, locale.uploading);
          } else if (!file.thumbUrl && !file.url) {
            icon = React.createElement(Icon, {
              className: "".concat(prefixCls, "-list-item-thumbnail"),
              type: "picture",
              theme: "twoTone"
            });
          } else {
            var thumbnail = isImageUrl(file) ? React.createElement("img", {
              src: file.thumbUrl || file.url,
              alt: file.name
            }) : React.createElement(Icon, {
              type: "file",
              className: "".concat(prefixCls, "-list-item-icon"),
              theme: "twoTone"
            });
            icon = React.createElement("a", {
              className: "".concat(prefixCls, "-list-item-thumbnail"),
              onClick: function onClick(e) {
                return _this.handlePreview(file, e);
              },
              href: file.url || file.thumbUrl,
              target: "_blank",
              rel: "noopener noreferrer"
            }, thumbnail);
          }
        }

        if (file.status === 'uploading') {
          // show loading icon if upload progress listener is disabled
          var loadingProgress = 'percent' in file ? React.createElement(Progress, _extends({
            type: "line"
          }, _this.props.progressAttr, {
            percent: file.percent
          })) : null;
          progress = React.createElement("div", {
            className: "".concat(prefixCls, "-list-item-progress"),
            key: "progress"
          }, loadingProgress);
        }

        var infoUploadingClass = classNames((_classNames = {}, _defineProperty(_classNames, "".concat(prefixCls, "-list-item"), true), _defineProperty(_classNames, "".concat(prefixCls, "-list-item-").concat(file.status), true), _classNames));
        var linkProps = typeof file.linkProps === 'string' ? JSON.parse(file.linkProps) : file.linkProps;
        var preview = file.url ? React.createElement("a", _extends({
          target: "_blank",
          rel: "noopener noreferrer",
          className: "".concat(prefixCls, "-list-item-name"),
          title: file.name
        }, linkProps, {
          href: file.url,
          onClick: function onClick(e) {
            return _this.handlePreview(file, e);
          }
        }), file.name) : React.createElement("span", {
          className: "".concat(prefixCls, "-list-item-name"),
          onClick: function onClick(e) {
            return _this.handlePreview(file, e);
          },
          title: file.name
        }, file.name);
        var style = {
          pointerEvents: 'none',
          opacity: 0.5
        };
        var previewIcon = showPreviewIcon ? React.createElement("a", {
          href: file.url || file.thumbUrl,
          target: "_blank",
          rel: "noopener noreferrer",
          style: file.url || file.thumbUrl ? undefined : style,
          onClick: function onClick(e) {
            return _this.handlePreview(file, e);
          },
          title: locale.previewFile
        }, React.createElement(Icon, {
          type: "eye-o"
        })) : null;
        var removeIcon = showRemoveIcon ? React.createElement(Icon, {
          type: "delete",
          title: locale.removeFile,
          onClick: function onClick() {
            return _this.handleClose(file);
          }
        }) : null;
        var removeIconClose = showRemoveIcon ? React.createElement(Icon, {
          type: "close",
          title: locale.removeFile,
          onClick: function onClick() {
            return _this.handleClose(file);
          }
        }) : null;
        var actions = listType === 'picture-card' && file.status !== 'uploading' ? React.createElement("span", {
          className: "".concat(prefixCls, "-list-item-actions")
        }, previewIcon, removeIcon) : removeIconClose;
        var message;

        if (file.response && typeof file.response === 'string') {
          message = file.response;
        } else {
          message = file.error && file.error.statusText || locale.uploadError;
        }

        var iconAndPreview = file.status === 'error' ? React.createElement(Tooltip, {
          title: message
        }, icon, preview) : React.createElement("span", null, icon, preview);
        return React.createElement("div", {
          className: infoUploadingClass,
          key: file.uid
        }, React.createElement("div", {
          className: "".concat(prefixCls, "-list-item-info")
        }, iconAndPreview), actions, React.createElement(Animate, {
          transitionName: "fade",
          component: ""
        }, progress));
      });
      var listClassNames = classNames((_classNames2 = {}, _defineProperty(_classNames2, "".concat(prefixCls, "-list"), true), _defineProperty(_classNames2, "".concat(prefixCls, "-list-").concat(listType), true), _classNames2));
      var animationDirection = listType === 'picture-card' ? 'animate-inline' : 'animate';
      return React.createElement(Animate, {
        transitionName: "".concat(prefixCls, "-").concat(animationDirection),
        component: "div",
        className: listClassNames
      }, list);
    };

    return _this;
  }

  _createClass(UploadList, [{
    key: "componentDidUpdate",
    value: function componentDidUpdate() {
      var _this2 = this;

      var _this$props2 = this.props,
          listType = _this$props2.listType,
          items = _this$props2.items,
          previewFile = _this$props2.previewFile;

      if (listType !== 'picture' && listType !== 'picture-card') {
        return;
      }

      (items || []).forEach(function (file) {
        if (typeof document === 'undefined' || typeof window === 'undefined' || !window.FileReader || !window.File || !(file.originFileObj instanceof File) || file.thumbUrl !== undefined) {
          return;
        }

        file.thumbUrl = '';

        if (previewFile) {
          previewFile(file.originFileObj).then(function (previewDataUrl) {
            // Need append '' to avoid dead loop
            file.thumbUrl = previewDataUrl || '';

            _this2.forceUpdate();
          });
        }
      });
    }
  }, {
    key: "render",
    value: function render() {
      return React.createElement(ConfigConsumer, null, this.renderUploadList);
    }
  }]);

  return UploadList;
}(React.Component);

export { UploadList as default };
UploadList.defaultProps = {
  listType: 'text',
  progressAttr: {
    strokeWidth: 2,
    showInfo: false
  },
  showRemoveIcon: true,
  showPreviewIcon: true,
  previewFile: previewImage
};