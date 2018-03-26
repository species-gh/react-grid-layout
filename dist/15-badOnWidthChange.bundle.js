webpackJsonp(
  [8],
  {
    /***/ 53: /***/ function(module, exports, __webpack_require__) {
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

        var BadOnWidthChangeExample = (function(_React$Component) {
          _inherits(BadOnWidthChangeExample, _React$Component);

          function BadOnWidthChangeExample() {
            var _temp, _this, _ret;

            _classCallCheck(this, BadOnWidthChangeExample);

            for (
              var _len = arguments.length, args = Array(_len), _key = 0;
              _key < _len;
              _key++
            ) {
              args[_key] = arguments[_key];
            }

            return (
              (_ret = ((_temp = ((_this = _possibleConstructorReturn(
                this,
                _React$Component.call.apply(
                  _React$Component,
                  [this].concat(args)
                )
              )),
              _this)),
              (_this.state = {
                currentBreakpoint: "lg",
                compactType: "vertical",
                mounted: false,
                layouts: { lg: _this.props.initialLayout }
              }),
              (_this.onWidthChange = function(width, margin, cols) {
                var height = Math.round((width - 10 * (cols - 1)) / cols);
                console.log("rowHeight = " + height);
                _this.setState({
                  rowHeight: height
                });
              }),
              (_this.onBreakpointChange = function(breakpoint) {
                _this.setState({
                  currentBreakpoint: breakpoint
                });
              }),
              (_this.onCompactTypeChange = function() {
                var oldCompactType = _this.state.compactType;

                var compactType =
                  oldCompactType === "horizontal"
                    ? "vertical"
                    : oldCompactType === "vertical" ? null : "horizontal";
                _this.setState({ compactType: compactType });
              }),
              (_this.onLayoutChange = function(layout, layouts) {
                _this.props.onLayoutChange(layout, layouts);
              }),
              (_this.onNewLayout = function() {
                _this.setState({
                  layouts: { lg: generateLayout() }
                });
              }),
              _temp)),
              _possibleConstructorReturn(_this, _ret)
            );
          }

          BadOnWidthChangeExample.prototype.componentDidMount = function componentDidMount() {
            this.setState({ mounted: true });
          };

          BadOnWidthChangeExample.prototype.generateDOM = function generateDOM() {
            return _lodash2.default.map(this.state.layouts.lg, function(l, i) {
              return _jsx(
                "div",
                {
                  className: l.static ? "static" : ""
                },
                i,
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
                      i
                    )
                  : _jsx(
                      "span",
                      {
                        className: "text"
                      },
                      void 0,
                      i
                    )
              );
            });
          };

          BadOnWidthChangeExample.prototype.render = function render() {
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
                "div",
                {},
                void 0,
                "Current rowHeight: ",
                this.state.rowHeight
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
              _react2.default.createElement(
                ResponsiveReactGridLayout,
                _extends({}, this.props, {
                  layouts: this.state.layouts,
                  onBreakpointChange: this.onBreakpointChange,
                  onLayoutChange: this.onLayoutChange,
                  onWidthChange: this.onWidthChange,
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

          return BadOnWidthChangeExample;
        })(_react2.default.Component);

        BadOnWidthChangeExample.defaultProps = {
          className: "layout",
          rowHeight: 50,
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
  [53]
);
