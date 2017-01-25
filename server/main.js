import express from 'express';
import WebpackDevServer from 'webpack-dev-server';
import webpack from 'webpack';

const app = express();
const port = 3000;
const devPort = 3001;

if(process.env.NODE_ENV == 'development') {
    console.log('Server is running on development mode');

    const config = require('../webpack.dev.config');
    let compiler = webpack(config);
    let devServer = new WebpackDevServer(compiler, config.devServer);
    devServer.listen(devPort, () => {
        console.log('webpack-dev-server is listening on port', devPort);
    });
}

// 경로 '/' 로 들어오는 요청들은 public 폴더로 정적 라우팅합니다.
app.use('/', express.static(__dirname + '/../public'));
//
// app.get('/hello', (req, res) => {
//     return res.send('Can you hear me?');
// });

// 라우트!! 연결
import counter from './routes/counter';
//data 객체 변수 선언 (초기화)
let data = {number: 0};
app.use('/counter', counter(data));

const server = app.listen(port, () => {
    console.log('Express listening on port', port);
});
