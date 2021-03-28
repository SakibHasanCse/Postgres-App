"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.DeleteBlog = exports.Update = exports.CreateBlog = exports.getBlog = exports.getBlogs = void 0;

var _db = require("../db");

var _slugify = _interopRequireDefault(require("slugify"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var getBlogs = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(req, res, next) {
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return _db.pool.query('SELECT * FROM todo').then(function (todo) {
              res.json(todo.rows);
            });

          case 2:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function getBlogs(_x, _x2, _x3) {
    return _ref.apply(this, arguments);
  };
}();

exports.getBlogs = getBlogs;

var getBlog = /*#__PURE__*/function () {
  var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(req, res, next) {
    var id;
    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            id = req.params.id;
            _context2.next = 3;
            return _db.pool.query('SELECT * FROM todo WHERE todo_id = $1', [id]).then(function (todo) {
              res.json(todo.rows);
            });

          case 3:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  }));

  return function getBlog(_x4, _x5, _x6) {
    return _ref2.apply(this, arguments);
  };
}();

exports.getBlog = getBlog;

var CreateBlog = /*#__PURE__*/function () {
  var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(req, res, next) {
    var _req$body, description, title, slug;

    return regeneratorRuntime.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            _context3.prev = 0;
            _req$body = req.body, description = _req$body.description, title = _req$body.title;
            slug = (0, _slugify["default"])(title);
            _context3.next = 5;
            return _db.pool.query('INSERT INTO todo (description ,title ,slug) VALUES($1 ,$2 ,$3)  RETURNING* ', [description, title, slug]).then(function (todo) {
              console.log(todo);
              res.json(todo.rows[0]);
            });

          case 5:
            _context3.next = 10;
            break;

          case 7:
            _context3.prev = 7;
            _context3.t0 = _context3["catch"](0);
            console.error(_context3.t0);

          case 10:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3, null, [[0, 7]]);
  }));

  return function CreateBlog(_x7, _x8, _x9) {
    return _ref3.apply(this, arguments);
  };
}();

exports.CreateBlog = CreateBlog;

var Update = /*#__PURE__*/function () {
  var _ref4 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4(req, res) {
    var _req$body2, description, title, id;

    return regeneratorRuntime.wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            _req$body2 = req.body, description = _req$body2.description, title = _req$body2.title;
            id = req.params.id;
            _context4.next = 4;
            return _db.pool.query('UPDATE todo SET description =$1 WHERE todo_id = $2', [description, id]).then(function (date) {
              res.json({
                message: 'Updated Successfully'
              });
            });

          case 4:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee4);
  }));

  return function Update(_x10, _x11) {
    return _ref4.apply(this, arguments);
  };
}();

exports.Update = Update;

var DeleteBlog = /*#__PURE__*/function () {
  var _ref5 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee5(req, res) {
    var id;
    return regeneratorRuntime.wrap(function _callee5$(_context5) {
      while (1) {
        switch (_context5.prev = _context5.next) {
          case 0:
            id = req.params.id;
            _context5.next = 3;
            return _db.pool.query('DELETE FROM todo WHERE todo_id = $1', [id]).then(function (date) {
              console.log(date);
              res.json({
                message: 'Deleted Successfully'
              });
            });

          case 3:
          case "end":
            return _context5.stop();
        }
      }
    }, _callee5);
  }));

  return function DeleteBlog(_x12, _x13) {
    return _ref5.apply(this, arguments);
  };
}();

exports.DeleteBlog = DeleteBlog;