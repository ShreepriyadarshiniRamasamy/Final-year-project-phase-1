import _defineProperty from 'babel-runtime/helpers/defineProperty';
import _classCallCheck from 'babel-runtime/helpers/classCallCheck';
import _createClass from 'babel-runtime/helpers/createClass';
import _possibleConstructorReturn from 'babel-runtime/helpers/possibleConstructorReturn';
import _inherits from 'babel-runtime/helpers/inherits';
import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import ContainerRender from 'rc-util/es/ContainerRender';
import getScrollBarSize from 'rc-util/es/getScrollBarSize';
import { dataToArray, transitionEnd, transitionStr, addEventListener, removeEventListener, transformArguments, isNumeric } from './utils';

var IS_REACT_16 = 'createPortal' in ReactDOM;

var currentDrawer = {};
var windowIsUndefined = !(typeof window !== 'undefined' && window.document && window.document.createElement);

var Drawer = function (_React$PureComponent) {
  _inherits(Drawer, _React$PureComponent);

  function Drawer(props) {
    _classCallCheck(this, Drawer);

    var _this = _possibleConstructorReturn(this, (Drawer.__proto__ || Object.getPrototypeOf(Drawer)).call(this, props));

    _initialiseProps.call(_this);

    _this.levelDom = [];
    _this.contentDom = null;
    _this.maskDom = null;
    _this.handlerDom = null;
    _this.firstEnter = props.firstEnter; // 记录首次进入.
    _this.timeout = null;
    _this.drawerId = Number((Date.now() + Math.random()).toString().replace('.', Math.round(Math.random() * 9))).toString(16);
    var open = props.open !== undefined ? props.open : !!props.defaultOpen;
    currentDrawer[_this.drawerId] = open;
    _this.state = {
      open: open
    };
    return _this;
  }

  _createClass(Drawer, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      if (!windowIsUndefined) {
        var passiveSupported = false;
        window.addEventListener('test', null, Object.defineProperty({}, 'passive', {
          get: function get() {
            passiveSupported = true;
            return null;
          }
        }));
        this.passive = passiveSupported ? { passive: false } : false;
      }
      var open = this.getOpen();
      if (this.props.handler || open || this.firstEnter) {
        this.getDefault(this.props);
        if (open) {
          this.isOpenChange = true;
        }
        this.forceUpdate();
      }
    }
  }, {
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      var open = nextProps.open,
          placement = nextProps.placement,
          getContainer = nextProps.getContainer;

      if (open !== undefined && open !== this.props.open) {
        this.isOpenChange = true;
        // 没渲染 dom 时，获取默认数据;
        if (!this.container || this.props.getContainer !== getContainer) {
          this.getDefault(nextProps);
        }
        this.setState({
          open: open
        });
      }
      if (placement !== this.props.placement) {
        // test 的 bug, 有动画过场，删除 dom
        this.contentDom = null;
      }
      if (this.props.level !== nextProps.level) {
        this.getParentAndLevelDom(nextProps);
      }
    }
  }, {
    key: 'componentDidUpdate',
    value: function componentDidUpdate() {
      // dom 没渲染时，重走一遍。
      if (!this.firstEnter && this.container) {
        this.forceUpdate();
        this.firstEnter = true;
      }
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      delete currentDrawer[this.drawerId];
      delete this.isOpenChange;
      if (this.container) {
        if (this.state.open) {
          this.setLevelDomTransform(false, true);
        }
        document.body.style.overflow = '';
        // 拦不住。。直接删除；
        if (this.props.getContainer) {
          this.container.parentNode.removeChild(this.container);
        }
      }
      this.firstEnter = false;
      clearTimeout(this.timeout);
      // suppport react15
      // 需要 didmount 后也会渲染，直接 unmount 将不会渲染，加上判断.
      if (this.renderComponent && !IS_REACT_16) {
        this.renderComponent({
          afterClose: this.removeContainer,
          onClose: function onClose() {},

          visible: false
        });
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      var _props = this.props,
          getContainer = _props.getContainer,
          wrapperClassName = _props.wrapperClassName;

      var open = this.getOpen();
      currentDrawer[this.drawerId] = open ? this.container : open;
      var children = this.getChildToRender(this.firstEnter ? open : false);
      if (!getContainer) {
        return React.createElement(
          'div',
          {
            className: wrapperClassName,
            ref: function ref(c) {
              if (_this2.props.getContainer) {
                return;
              }
              _this2.container = c;
            }
          },
          children
        );
      }
      if (!this.container || !open && !this.firstEnter) {
        return null;
      }
      // suppport react15
      if (!IS_REACT_16) {
        return React.createElement(
          ContainerRender,
          {
            parent: this,
            visible: true,
            autoMount: true,
            autoDestroy: false,
            getComponent: function getComponent() {
              return children;
            },
            getContainer: this.getContainer
          },
          function (_ref) {
            var renderComponent = _ref.renderComponent,
                removeContainer = _ref.removeContainer;

            _this2.renderComponent = renderComponent;
            _this2.removeContainer = removeContainer;
            return null;
          }
        );
      }
      return ReactDOM.createPortal(children, this.container);
    }
  }]);

  return Drawer;
}(React.PureComponent);

Drawer.propTypes = {
  wrapperClassName: PropTypes.string,
  className: PropTypes.string,
  children: PropTypes.node,
  style: PropTypes.object,
  width: PropTypes.any,
  height: PropTypes.any,
  defaultOpen: PropTypes.bool,
  firstEnter: PropTypes.bool,
  open: PropTypes.bool,
  prefixCls: PropTypes.string,
  placement: PropTypes.string,
  level: PropTypes.oneOfType([PropTypes.string, PropTypes.array]),
  levelMove: PropTypes.oneOfType([PropTypes.number, PropTypes.func, PropTypes.array]),
  ease: PropTypes.string,
  duration: PropTypes.string,
  getContainer: PropTypes.oneOfType([PropTypes.string, PropTypes.func, PropTypes.object, PropTypes.bool]),
  handler: PropTypes.any,
  onChange: PropTypes.func,
  afterVisibleChange: PropTypes.func,
  onMaskClick: PropTypes.func,
  onHandleClick: PropTypes.func,
  showMask: PropTypes.bool,
  maskStyle: PropTypes.object
};
Drawer.defaultProps = {
  prefixCls: 'drawer',
  placement: 'left',
  getContainer: 'body',
  level: 'all',
  duration: '.3s',
  ease: 'cubic-bezier(0.78, 0.14, 0.15, 0.86)',
  onChange: function onChange() {},
  afterVisibleChange: function afterVisibleChange() {},
  onMaskClick: function onMaskClick() {},
  onHandleClick: function onHandleClick() {},
  handler: React.createElement(
    'div',
    { className: 'drawer-handle' },
    React.createElement('i', { className: 'drawer-handle-icon' })
  ),
  firstEnter: false,
  showMask: true,
  maskStyle: {},
  wrapperClassName: '',
  className: ''
};

var _initialiseProps = function _initialiseProps() {
  var _this3 = this;

  this.onMaskTouchEnd = function (e) {
    _this3.props.onMaskClick(e);
    _this3.onTouchEnd(e, true);
  };

  this.onIconTouchEnd = function (e) {
    _this3.props.onHandleClick(e);
    _this3.onTouchEnd(e);
  };

  this.onTouchEnd = function (e, close) {
    if (_this3.props.open !== undefined) {
      return;
    }
    var open = close || _this3.state.open;
    _this3.isOpenChange = true;
    _this3.setState({
      open: !open
    });
  };

  this.onWrapperTransitionEnd = function (e) {
    if (e.target === _this3.contentWrapper) {
      _this3.dom.style.transition = '';
      if (!_this3.state.open && _this3.getCurrentDrawerSome()) {
        document.body.style.overflowX = '';
        if (_this3.maskDom) {
          _this3.maskDom.style.left = '';
          _this3.maskDom.style.width = '';
        }
      }
      var afterVisibleChange = _this3.props.afterVisibleChange;
      var open = _this3.state.open;

      afterVisibleChange(open);
    }
  };

  this.getDefault = function (props) {
    _this3.getParentAndLevelDom(props);
    if (props.getContainer || props.parent) {
      _this3.container = _this3.defaultGetContainer();
    }
  };

  this.getCurrentDrawerSome = function () {
    return !Object.keys(currentDrawer).some(function (key) {
      return currentDrawer[key];
    });
  };

  this.getContainer = function () {
    return _this3.container;
  };

  this.getParentAndLevelDom = function (props) {
    if (windowIsUndefined) {
      return;
    }
    var level = props.level,
        getContainer = props.getContainer;

    _this3.levelDom = [];
    if (getContainer) {
      if (typeof getContainer === 'string') {
        var dom = document.querySelectorAll(getContainer)[0];
        _this3.parent = dom;
      }
      if (typeof getContainer === 'function') {
        _this3.parent = getContainer();
      }
      if (typeof getContainer === 'object' && getContainer instanceof window.HTMLElement) {
        _this3.parent = getContainer;
      }
    }
    if (!getContainer && _this3.container) {
      _this3.parent = _this3.container.parentNode;
    }
    if (level === 'all') {
      var children = Array.prototype.slice.call(_this3.parent.children);
      children.forEach(function (child) {
        if (child.nodeName !== 'SCRIPT' && child.nodeName !== 'STYLE' && child.nodeName !== 'LINK' && child !== _this3.container) {
          _this3.levelDom.push(child);
        }
      });
    } else if (level) {
      dataToArray(level).forEach(function (key) {
        document.querySelectorAll(key).forEach(function (item) {
          _this3.levelDom.push(item);
        });
      });
    }
  };

  this.setLevelDomTransform = function (open, openTransition, placementName, value) {
    var _props2 = _this3.props,
        placement = _props2.placement,
        levelMove = _props2.levelMove,
        duration = _props2.duration,
        ease = _props2.ease,
        onChange = _props2.onChange,
        getContainer = _props2.getContainer,
        showMask = _props2.showMask;

    if (!windowIsUndefined) {
      _this3.levelDom.forEach(function (dom) {
        if (_this3.isOpenChange || openTransition) {
          /* eslint no-param-reassign: "error" */
          dom.style.transition = 'transform ' + duration + ' ' + ease;
          addEventListener(dom, transitionEnd, _this3.transitionEnd);
          var levelValue = open ? value : 0;
          if (levelMove) {
            var $levelMove = transformArguments(levelMove, { target: dom, open: open });
            levelValue = open ? $levelMove[0] : $levelMove[1] || 0;
          }
          var $value = typeof levelValue === 'number' ? levelValue + 'px' : levelValue;
          var placementPos = placement === 'left' || placement === 'top' ? $value : '-' + $value;
          dom.style.transform = levelValue ? placementName + '(' + placementPos + ')' : '';
          dom.style.msTransform = levelValue ? placementName + '(' + placementPos + ')' : '';
        }
      });
      // 处理 body 滚动
      if (getContainer === 'body' && showMask) {
        var eventArray = ['touchstart'];
        var domArray = [document.body, _this3.maskDom, _this3.handlerDom, _this3.contentDom];
        var right = document.body.scrollHeight > (window.innerHeight || document.documentElement.clientHeight) && window.innerWidth > document.body.offsetWidth ? getScrollBarSize(1) : 0;
        var widthTransition = 'width ' + duration + ' ' + ease;
        var transformTransition = 'transform ' + duration + ' ' + ease;
        if (open && document.body.style.overflow !== 'hidden') {
          document.body.style.overflow = 'hidden';
          document.body.style.touchAction = 'none';
          if (right) {
            document.body.style.position = 'relative';
            document.body.style.width = 'calc(100% - ' + right + 'px)';
            _this3.dom.style.transition = 'none';
            switch (placement) {
              case 'right':
                _this3.dom.style.transform = 'translateX(-' + right + 'px)';
                _this3.dom.style.msTransform = 'translateX(-' + right + 'px)';
                break;
              case 'top':
              case 'bottom':
                _this3.dom.style.width = 'calc(100% - ' + right + 'px)';
                _this3.dom.style.transform = 'translateZ(0)';
                break;
              default:
                break;
            }
            clearTimeout(_this3.timeout);
            _this3.timeout = setTimeout(function () {
              _this3.dom.style.transition = transformTransition + ',' + widthTransition;
              _this3.dom.style.width = '';
              _this3.dom.style.transform = '';
              _this3.dom.style.msTransform = '';
            });
          }
          // 手机禁滚
          domArray.forEach(function (item, i) {
            if (!item) {
              return;
            }
            addEventListener(item, eventArray[i] || 'touchmove', i ? _this3.removeMoveHandler : _this3.removeStartHandler, _this3.passive);
          });
        } else if (_this3.getCurrentDrawerSome()) {
          document.body.style.overflow = '';
          document.body.style.touchAction = '';
          if ((_this3.isOpenChange || openTransition) && right) {
            document.body.style.position = '';
            document.body.style.width = '';
            if (transitionStr) {
              document.body.style.overflowX = 'hidden';
            }
            _this3.dom.style.transition = 'none';
            var heightTransition = void 0;
            switch (placement) {
              case 'right':
                {
                  _this3.dom.style.transform = 'translateX(' + right + 'px)';
                  _this3.dom.style.msTransform = 'translateX(' + right + 'px)';
                  _this3.dom.style.width = '100%';
                  widthTransition = 'width 0s ' + ease + ' ' + duration;
                  if (_this3.maskDom) {
                    _this3.maskDom.style.left = '-' + right + 'px';
                    _this3.maskDom.style.width = 'calc(100% + ' + right + 'px)';
                  }
                  break;
                }
              case 'top':
              case 'bottom':
                {
                  _this3.dom.style.width = 'calc(100% + ' + right + 'px)';
                  _this3.dom.style.height = '100%';
                  _this3.dom.style.transform = 'translateZ(0)';
                  heightTransition = 'height 0s ' + ease + ' ' + duration;
                  break;
                }
              default:
                break;
            }
            clearTimeout(_this3.timeout);
            _this3.timeout = setTimeout(function () {
              _this3.dom.style.transition = transformTransition + ',' + (heightTransition ? heightTransition + ',' : '') + widthTransition;
              _this3.dom.style.transform = '';
              _this3.dom.style.msTransform = '';
              _this3.dom.style.width = '';
              _this3.dom.style.height = '';
            });
          }
          domArray.forEach(function (item, i) {
            if (!item) {
              return;
            }
            removeEventListener(item, eventArray[i] || 'touchmove', i ? _this3.removeMoveHandler : _this3.removeStartHandler, _this3.passive);
          });
        }
      }
    }
    if (_this3.isOpenChange && _this3.firstEnter) {
      onChange(open);
      _this3.isOpenChange = false;
    }
  };

  this.getChildToRender = function (open) {
    var _classnames;

    var _props3 = _this3.props,
        className = _props3.className,
        prefixCls = _props3.prefixCls,
        style = _props3.style,
        placement = _props3.placement,
        children = _props3.children,
        handler = _props3.handler,
        showMask = _props3.showMask,
        maskStyle = _props3.maskStyle,
        width = _props3.width,
        height = _props3.height;

    var wrapperClassName = classnames(prefixCls, (_classnames = {}, _defineProperty(_classnames, prefixCls + '-' + placement, true), _defineProperty(_classnames, prefixCls + '-open', open), _defineProperty(_classnames, className, !!className), _classnames));
    var isOpenChange = _this3.isOpenChange;
    var isHorizontal = placement === 'left' || placement === 'right';
    var placementName = 'translate' + (isHorizontal ? 'X' : 'Y');
    // 百分比与像素动画不同步，第一次打用后全用像素动画。
    // const defaultValue = !this.contentDom || !level ? '100%' : `${value}px`;
    var placementPos = placement === 'left' || placement === 'top' ? '-100%' : '100%';
    var transform = open ? '' : placementName + '(' + placementPos + ')';
    if (isOpenChange === undefined || isOpenChange) {
      var contentValue = _this3.contentDom ? _this3.contentDom.getBoundingClientRect()[isHorizontal ? 'width' : 'height'] : 0;
      var value = (isHorizontal ? width : height) || contentValue;
      _this3.setLevelDomTransform(open, false, placementName, value);
    }
    var handlerChildren = handler && React.cloneElement(handler, {
      onClick: function onClick(e) {
        if (handler.props.onClick) {
          handler.props.onClick();
        }
        _this3.onIconTouchEnd(e);
      },
      ref: function ref(c) {
        _this3.handlerDom = c;
      }
    });
    return React.createElement(
      'div',
      {
        className: wrapperClassName,
        style: style,
        ref: function ref(c) {
          _this3.dom = c;
        },
        onTransitionEnd: _this3.onWrapperTransitionEnd
      },
      showMask && React.createElement('div', {
        className: prefixCls + '-mask',
        onClick: _this3.onMaskTouchEnd,
        style: maskStyle,
        ref: function ref(c) {
          _this3.maskDom = c;
        }
      }),
      React.createElement(
        'div',
        {
          className: prefixCls + '-content-wrapper',
          style: {
            transform: transform,
            msTransform: transform,
            width: isNumeric(width) ? width + 'px' : width,
            height: isNumeric(height) ? height + 'px' : height
          },
          ref: function ref(c) {
            _this3.contentWrapper = c;
          }
        },
        React.createElement(
          'div',
          {
            className: prefixCls + '-content',
            ref: function ref(c) {
              _this3.contentDom = c;
            },
            onTouchStart: open && showMask ? _this3.removeStartHandler : null // 跑用例用
            , onTouchMove: open && showMask ? _this3.removeMoveHandler : null // 跑用例用
          },
          children
        ),
        handlerChildren
      )
    );
  };

  this.getOpen = function () {
    return _this3.props.open !== undefined ? _this3.props.open : _this3.state.open;
  };

  this.getTouchParentScroll = function (root, currentTarget, differX, differY) {
    if (!currentTarget || currentTarget === document) {
      return false;
    }
    // root 为 drawer-content 设定了 overflow, 判断为 root 的 parent 时结束滚动；
    if (currentTarget === root.parentNode) {
      return true;
    }

    var isY = Math.max(Math.abs(differX), Math.abs(differY)) === Math.abs(differY);
    var isX = Math.max(Math.abs(differX), Math.abs(differY)) === Math.abs(differX);

    var scrollY = currentTarget.scrollHeight - currentTarget.clientHeight;
    var scrollX = currentTarget.scrollWidth - currentTarget.clientWidth;
    /**
     * <div style="height: 300px">
     *   <div style="height: 900px"></div>
     * </div>
     * 在没设定 overflow: auto 或 scroll 时，currentTarget 里获取不到 scrollTop 或 scrollLeft,
     * 预先用 scrollTo 来滚动，如果取出的值跟滚动前取出不同，则 currnetTarget 被设定了 overflow; 否则就是上面这种。
     */
    var t = currentTarget.scrollTop;
    var l = currentTarget.scrollLeft;
    currentTarget.scrollTop += 1;
    currentTarget.scrollLeft += 1;
    var currentT = currentTarget.scrollTop;
    var currentL = currentTarget.scrollLeft;
    currentTarget.scrollTop -= 1;
    currentTarget.scrollLeft -= 1;
    if (isY && (!scrollY || !(currentT - t) || scrollY && (currentTarget.scrollTop >= scrollY && differY < 0 || currentTarget.scrollTop <= 0 && differY > 0)) || isX && (!scrollX || !(currentL - l) || scrollX && (currentTarget.scrollLeft >= scrollX && differX < 0 || currentTarget.scrollLeft <= 0 && differX > 0))) {
      return _this3.getTouchParentScroll(root, currentTarget.parentNode, differX, differY);
    }
    return false;
  };

  this.removeStartHandler = function (e) {
    if (e.touches.length > 1) {
      return;
    }
    _this3.startPos = {
      x: e.touches[0].clientX,
      y: e.touches[0].clientY
    };
  };

  this.removeMoveHandler = function (e) {
    if (e.changedTouches.length > 1) {
      return;
    }
    var currentTarget = e.currentTarget;
    var differX = e.changedTouches[0].clientX - _this3.startPos.x;
    var differY = e.changedTouches[0].clientY - _this3.startPos.y;
    if (currentTarget === _this3.maskDom || currentTarget === _this3.handlerDom || currentTarget === _this3.contentDom && _this3.getTouchParentScroll(currentTarget, e.target, differX, differY)) {
      e.preventDefault();
    }
  };

  this.transitionEnd = function (e) {
    removeEventListener(e.target, transitionEnd, _this3.transitionEnd);
    e.target.style.transition = '';
  };

  this.defaultGetContainer = function () {
    if (windowIsUndefined) {
      return null;
    }
    var container = document.createElement('div');
    _this3.parent.appendChild(container);
    if (_this3.props.wrapperClassName) {
      container.className = _this3.props.wrapperClassName;
    }
    return container;
  };
};

export default Drawer;