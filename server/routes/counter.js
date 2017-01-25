//따로 데이터베이스를 사용하지 않고, main.js파일에서 지정한 객체변수의 값을 데이터로 사용

import express from 'express';
//컬러 모듈은 node.js 콘솔의 텍스트색상을 쉽게 입힐 수 있는 모듈임
//npm install --save-dev colors로 설치
import colors from 'colors';

export default function counter(data) {
  //getIP 함수 정의
  function getIP(req) {
    return req.connection.remoteAddress.split(":").pop();
  }

  //라우터 정의
  const router = express.Router();

  router.post('/', (req, res) => {
    console.log(colors.green('[INC]'), ++data.number, getIP(req));
    return res.json({number: data.number});
  });

  router.get('/', (req, res) => {
    console.log(colors.yellow('[req]'), data.number, getIP(req));
    return res.json({number: data.number});
  });

  return router;
}
