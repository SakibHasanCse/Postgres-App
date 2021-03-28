"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _blog = require("../controllers/blog");

var _express = _interopRequireDefault(require("express"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var router = _express["default"].Router();

router.get('/blogs', _blog.getBlogs);
router.post('/blog', _blog.CreateBlog);
router.get('/blog/:id', _blog.getBlog);
router.put('/blog/:id', _blog.Update);
router["delete"]('/blog/:id', _blog.DeleteBlog);
var _default = router;
exports["default"] = _default;