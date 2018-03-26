webpackJsonp(
  [9],
  {
    /***/ 52: /***/ function(module, exports, __webpack_require__) {
      "use strict";
      /* WEBPACK VAR INJECTION */ (function(module) {
        var _extends =
          Object.assign ||
          function(target) {
            for (var i = 1; i < arguments.length; i++) {
              var source = arguments[i];
              for (var key in source) {
                if (Object.prototype.hasOwnProperty.call(source, key)) {
                  target[key] = source[key];
                }
              }
            }
            return target;
          };

        var _jsx = (function() {
          var REACT_ELEMENT_TYPE =
            (typeof Symbol === "function" &&
              Symbol.for &&
              Symbol.for("react.element")) ||
            0xeac7;
          return function createRawReactElement(type, props, key, children) {
            var defaultProps = type && type.defaultProps;
            var childrenLength = arguments.length - 3;
            if (!props && childrenLength !== 0) {
              props = {};
            }
            if (props && defaultProps) {
              for (var propName in defaultProps) {
                if (props[propName] === void 0) {
                  props[propName] = defaultProps[propName];
                }
              }
            } else if (!props) {
              props = defaultProps || {};
            }
            if (childrenLength === 1) {
              props.children = children;
            } else if (childrenLength > 1) {
              var childArray = Array(childrenLength);
              for (var i = 0; i < childrenLength; i++) {
                childArray[i] = arguments[i + 3];
              }
              props.children = childArray;
            }
            return {
              $$typeof: REACT_ELEMENT_TYPE,
              type: type,
              key: key === undefined ? null : "" + key,
              ref: null,
              props: props,
              _owner: null
            };
          };
        })();

        var _react = __webpack_require__(0);

        var _react2 = _interopRequireDefault(_react);

        var _lodash = __webpack_require__(4);

        var _lodash2 = _interopRequireDefault(_lodash);

        var _reactGridLayout = __webpack_require__(2);

        function _interopRequireDefault(obj) {
          return obj && obj.__esModule ? obj : { default: obj };
        }

        function _classCallCheck(instance, Constructor) {
          if (!(instance instanceof Constructor)) {
            throw new TypeError("Cannot call a class as a function");
          }
        }

        function _possibleConstructorReturn(self, call) {
          if (!self) {
            throw new ReferenceError(
              "this hasn't been initialised - super() hasn't been called"
            );
          }
          return call &&
            (typeof call === "object" || typeof call === "function")
            ? call
            : self;
        }

        function _inherits(subClass, superClass) {
          if (typeof superClass !== "function" && superClass !== null) {
            throw new TypeError(
              "Super expression must either be null or a function, not " +
                typeof superClass
            );
          }
          subClass.prototype = Object.create(
            superClass && superClass.prototype,
            {
              constructor: {
                value: subClass,
                enumerable: false,
                writable: true,
                configurable: true
              }
            }
          );
          if (superClass)
            Object.setPrototypeOf
              ? Object.setPrototypeOf(subClass, superClass)
              : (subClass.__proto__ = superClass);
        }

        var ResponsiveReactGridLayout = (0, _reactGridLayout.WidthProvider)(
          _reactGridLayout.Responsive
        );

        var ToolBoxItem = (function(_React$Component) {
          _inherits(ToolBoxItem, _React$Component);

          function ToolBoxItem() {
            _classCallCheck(this, ToolBoxItem);

            return _possibleConstructorReturn(
              this,
              _React$Component.apply(this, arguments)
            );
          }

          ToolBoxItem.prototype.render = function render() {
            return _jsx(
              "div",
              {
                className: "toolbox__items__item",
                onClick: this.props.onTakeItem.bind(undefined, this.props.item)
              },
              void 0,
              this.props.item.i
            );
          };

          return ToolBoxItem;
        })(_react2.default.Component);

        var ToolBox = (function(_React$Component2) {
          _inherits(ToolBox, _React$Component2);

          function ToolBox() {
            _classCallCheck(this, ToolBox);

            return _possibleConstructorReturn(
              this,
              _React$Component2.apply(this, arguments)
            );
          }

          ToolBox.prototype.render = function render() {
            var _this3 = this;

            return _jsx(
              "div",
              {
                className: "toolbox"
              },
              void 0,
              _jsx(
                "span",
                {
                  className: "toolbox__title"
                },
                void 0,
                "Toolbox"
              ),
              _jsx(
                "div",
                {
                  className: "toolbox__items"
                },
                void 0,
                this.props.items.map(function(item) {
                  return _jsx(
                    ToolBoxItem,
                    {
                      item: item,
                      onTakeItem: _this3.props.onTakeItem
                    },
                    item.i
                  );
                })
              )
            );
          };

          return ToolBox;
        })(_react2.default.Component);

        var ShowcaseLayout = (function(_React$Component3) {
          _inherits(ShowcaseLayout, _React$Component3);

          function ShowcaseLayout() {
            var _temp, _this4, _ret;

            _classCallCheck(this, ShowcaseLayout);

            for (
              var _len = arguments.length, args = Array(_len), _key = 0;
              _key < _len;
              _key++
            ) {
              args[_key] = arguments[_key];
            }

            return (
              (_ret = ((_temp = ((_this4 = _possibleConstructorReturn(
                this,
                _React$Component3.call.apply(
                  _React$Component3,
                  [this].concat(args)
                )
              )),
              _this4)),
              (_this4.state = {
                currentBreakpoint: "lg",
                compactType: "vertical",
                mounted: false,
                layouts: { lg: _this4.props.initialLayout },
                toolbox: { lg: [] }
              }),
              (_this4.onBreakpointChange = function(breakpoint) {
                _this4.setState(function(prevState) {
                  var _extends2;

                  return {
                    currentBreakpoint: breakpoint,
                    toolbox: _extends(
                      {},
                      prevState.toolbox,
                      ((_extends2 = {}),
                      (_extends2[breakpoint] =
                        prevState.toolbox[breakpoint] ||
                        prevState.toolbox[prevState.currentBreakpoint] ||
                        []),
                      _extends2)
                    )
                  };
                });
              }),
              (_this4.onCompactTypeChange = function() {
                var oldCompactType = _this4.state.compactType;

                var compactType =
                  oldCompactType === "horizontal"
                    ? "vertical"
                    : oldCompactType === "vertical" ? null : "horizontal";
                _this4.setState({ compactType: compactType });
              }),
              (_this4.onTakeItem = function(item) {
                _this4.setState(function(prevState) {
                  var _extends3, _extends4;

                  return {
                    toolbox: _extends(
                      {},
                      prevState.toolbox,
                      ((_extends3 = {}),
                      (_extends3[
                        prevState.currentBreakpoint
                      ] = prevState.toolbox[prevState.currentBreakpoint].filter(
                        function(_ref) {
                          var i = _ref.i;
                          return i !== item.i;
                        }
                      )),
                      _extends3)
                    ),
                    layouts: _extends(
                      {},
                      prevState.layouts,
                      ((_extends4 = {}),
                      (_extends4[prevState.currentBreakpoint] = [].concat(
                        prevState.layouts[prevState.currentBreakpoint],
                        [item]
                      )),
                      _extends4)
                    )
                  };
                });
              }),
              (_this4.onPutItem = function(item) {
                _this4.setState(function(prevState) {
                  var _extends5, _extends6;

                  return {
                    toolbox: _extends(
                      {},
                      prevState.toolbox,
                      ((_extends5 = {}),
                      (_extends5[prevState.currentBreakpoint] = [].concat(
                        prevState.toolbox[prevState.currentBreakpoint] || [],
                        [item]
                      )),
                      _extends5)
                    ),
                    layouts: _extends(
                      {},
                      prevState.layouts,
                      ((_extends6 = {}),
                      (_extends6[
                        prevState.currentBreakpoint
                      ] = prevState.layouts[prevState.currentBreakpoint].filter(
                        function(_ref2) {
                          var i = _ref2.i;
                          return i !== item.i;
                        }
                      )),
                      _extends6)
                    )
                  };
                });
              }),
              (_this4.onLayoutChange = function(layout, layouts) {
                _this4.props.onLayoutChange(layout, layouts);
                _this4.setState({ layouts: layouts });
              }),
              (_this4.onNewLayout = function() {
                _this4.setState({
                  layouts: { lg: generateLayout() }
                });
              }),
              _temp)),
              _possibleConstructorReturn(_this4, _ret)
            );
          }

          ShowcaseLayout.prototype.componentDidMount = function componentDidMount() {
            this.setState({ mounted: true });
          };

          ShowcaseLayout.prototype.generateDOM = function generateDOM() {
            var _this5 = this;

            return _lodash2.default.map(
              this.state.layouts[this.state.currentBreakpoint],
              function(l) {
                return _jsx(
                  "div",
                  {
                    className: l.static ? "static" : ""
                  },
                  l.i,
                  _jsx(
                    "div",
                    {
                      className: "hide-button",
                      onClick: _this5.onPutItem.bind(_this5, l)
                    },
                    void 0,
                    "\xD7"
                  ),
                  l.static
                    ? _jsx(
                        "span",
                        {
                          className: "text",
                          title:
                            "This item is static and cannot be removed or resized."
                        },
                        void 0,
                        "Static - ",
                        l.i
                      )
                    : _jsx(
                        "span",
                        {
                          className: "text"
                        },
                        void 0,
                        l.i
                      )
                );
              }
            );
          };

          ShowcaseLayout.prototype.render = function render() {
            return _jsx(
              "div",
              {},
              void 0,
              _jsx(
                "div",
                {},
                void 0,
                "Current Breakpoint: ",
                this.state.currentBreakpoint,
                " (",
                this.props.cols[this.state.currentBreakpoint],
                " ",
                "columns)"
              ),
              _jsx(
                "div",
                {},
                void 0,
                "Compaction type:",
                " ",
                _lodash2.default.capitalize(this.state.compactType) ||
                  "No Compaction"
              ),
              _jsx(
                "button",
                {
                  onClick: this.onNewLayout
                },
                void 0,
                "Generate New Layout"
              ),
              _jsx(
                "button",
                {
                  onClick: this.onCompactTypeChange
                },
                void 0,
                "Change Compaction Type"
              ),
              _jsx(ToolBox, {
                items: this.state.toolbox[this.state.currentBreakpoint] || [],
                onTakeItem: this.onTakeItem
              }),
              _react2.default.createElement(
                ResponsiveReactGridLayout,
                _extends({}, this.props, {
                  layouts: this.state.layouts,
                  onBreakpointChange: this.onBreakpointChange,
                  onLayoutChange: this.onLayoutChange,
                  // WidthProvider option
                  measureBeforeMount: false,
                  // I like to have it animate on mount. If you don't, delete `useCSSTransforms` (it's default `true`)
                  // and set `measureBeforeMount={true}`.
                  useCSSTransforms: this.state.mounted,
                  compactType: this.state.compactType,
                  preventCollision: !this.state.compactType
                }),
                this.generateDOM()
              )
            );
          };

          return ShowcaseLayout;
        })(_react2.default.Component);

        ShowcaseLayout.defaultProps = {
          className: "layout",
          rowHeight: 30,
          onLayoutChange: function onLayoutChange() {},
          cols: { lg: 12, md: 10, sm: 6, xs: 4, xxs: 2 },
          initialLayout: generateLayout()
        };

        module.exports = ShowcaseLayout;

        function generateLayout() {
          return _lodash2.default.map(_lodash2.default.range(0, 25), function(
            item,
            i
          ) {
            var y = Math.ceil(Math.random() * 4) + 1;
            return {
              x: (_lodash2.default.random(0, 5) * 2) % 12,
              y: Math.floor(i / 6) * y,
              w: 2,
              h: y,
              i: i.toString(),
              static: Math.random() < 0.05
            };
          });
        }

        if (__webpack_require__.c[__webpack_require__.s] === module) {
          __webpack_require__(3)(module.exports);
        }
        /* WEBPACK VAR INJECTION */
      }.call(exports, __webpack_require__(1)(module)));

      /***/
    }
  },
  [52]
);
