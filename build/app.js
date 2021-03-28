"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = _interopRequireDefault(require("express"));

var _fs = _interopRequireDefault(require("fs"));

var _path = _interopRequireDefault(require("path"));

var _blog = _interopRequireDefault(require("./routers/blog"));

var _user = _interopRequireDefault(require("./routers/user"));

var _db = require("./db");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var app = (0, _express["default"])();
app.use(_express["default"].json());

var routers = _fs["default"].readdirSync(_path["default"].join(__dirname, 'routers'));

routers.map(function (route) {
  app.use('/api', require("./routers/".concat(route))["default"]);
});
var _default = app;
exports["default"] = _default;