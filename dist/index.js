"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.configuration = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _module = require("./config/module");

var _module2 = _interopRequireDefault(_module);

var _resolve = require("./config/resolve");

var _server = require("./config/server");

var _optimization = require("./config/optimization");

var _optimization2 = _interopRequireDefault(_optimization);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var configuration = exports.configuration = function configuration(serverConf) {
    return {
        module: (0, _module2.default)(),
        resolve: (0, _resolve.resolve)(),
        devServer: _extends({}, (0, _server.server)(), serverConf),
        // plugins: plugins(),
        optimization: (0, _optimization2.default)()
    };
};