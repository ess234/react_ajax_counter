'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = counter;

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _colors = require('colors');

var _colors2 = _interopRequireDefault(_colors);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//따로 데이터베이스를 사용하지 않고, main.js파일에서 지정한 객체변수의 값을 데이터로 사용

function counter(data) {
  //getIP 함수 정의
  function getIP(req) {
    return req.connection.remoteAddress.split(":").pop();
  }

  //라우터 정의
  var router = _express2.default.Router();

  router.post('/', function (req, res) {
    console.log(_colors2.default.green('[INC]'), ++data.number, getIP(req));
    return res.json({ number: data.number });
  });

  router.get('/', function (req, res) {
    console.log(_colors2.default.yellow('[req]'), data.number, getIP(req));
    return res.json({ number: data.number });
  });

  return router;
}
//컬러 모듈은 node.js 콘솔의 텍스트색상을 쉽게 입힐 수 있는 모듈임
//npm install --save-dev colors로 설치