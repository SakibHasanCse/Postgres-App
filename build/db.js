"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.pool = void 0;

var _pg = require("pg");

var pool = new _pg.Pool({
  user: 'amiar',
  password: '',
  host: 'localhost',
  port: '5432',
  database: 'sakib'
});
exports.pool = pool;