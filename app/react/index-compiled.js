"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _reactDom = require("react-dom");

var _reactRouter = require("react-router");

var _page = require("./components/page1");

var _page2 = _interopRequireDefault(_page);

var _page3 = require("./components/page2");

var _page4 = _interopRequireDefault(_page3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// first we import some components

var App = function (_Component) {
    _inherits(App, _Component);

    function App() {
        _classCallCheck(this, App);

        return _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).apply(this, arguments));
    }

    _createClass(App, [{
        key: "render",
        value: function render() {
            return _react2.default.createElement(
                "div",
                { className: "rootApp" },
                _react2.default.createElement(
                    "div",
                    { className: "headerArea" },
                    _react2.default.createElement(
                        "nav",
                        { className: "navbar navbar-default navbar-static-top" },
                        _react2.default.createElement(
                            "div",
                            { className: "container-fluid" },
                            _react2.default.createElement(
                                "div",
                                { className: "navbar-header" },
                                _react2.default.createElement(
                                    "a",
                                    { className: "navbar-brand menu", href: "#" },
                                    _react2.default.createElement("img", { alt: "Menu", src: "/images/Menu_mobile.png" })
                                )
                            ),
                            _react2.default.createElement(
                                "div",
                                { className: "navbar-header" },
                                _react2.default.createElement(
                                    "a",
                                    { className: "navbar-brand logo", href: "#" },
                                    _react2.default.createElement("img", { alt: "Logo", src: "/images/Logo.png" })
                                )
                            ),
                            _react2.default.createElement(
                                "p",
                                { className: "navbar-text rightMenu navbar-right" },
                                _react2.default.createElement(
                                    "span",
                                    null,
                                    "Contatti"
                                ),
                                _react2.default.createElement("a", { href: "#", className: "navbar-link" })
                            )
                        )
                    )
                ),
                _react2.default.createElement(
                    "menu",
                    null,
                    _react2.default.createElement(
                        "ul",
                        null,
                        _react2.default.createElement(
                            "li",
                            null,
                            _react2.default.createElement(
                                _reactRouter.Link,
                                { to: "/page1" },
                                "Page1"
                            )
                        ),
                        _react2.default.createElement(
                            "li",
                            null,
                            _react2.default.createElement(
                                _reactRouter.Link,
                                { to: "/page2" },
                                "Page2"
                            )
                        )
                    )
                ),
                this.props.children
            );
        }
    }]);

    return App;
}(_react.Component);

(0, _reactDom.render)(_react2.default.createElement(
    _reactRouter.Router,
    { history: _reactRouter.browserHistory },
    _react2.default.createElement(
        _reactRouter.Route,
        { path: "/", component: App },
        _react2.default.createElement(_reactRouter.IndexRoute, { component: _page2.default }),
        _react2.default.createElement(_reactRouter.Route, { path: "page1", component: _page2.default, title: "Page1" }),
        _react2.default.createElement(_reactRouter.Route, { path: "page2", component: _page4.default, title: "Page2" })
    )
), document.getElementById('root'));

//# sourceMappingURL=index-compiled.js.map