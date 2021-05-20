'use strict';
const express = require('express');
var proxy = require('http-proxy-middleware');
const qs = require('querystring');
const urlpg = require('url');
var history = require('connect-history-api-fallback');
var compress = require('compression');

let app = express();
app.use(compress());
app.use(history());
app.use(express.static('./'))

app.all('*', function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Content-Type,Content-Length, Authorization, Accept,X-Requested-With");
    res.header("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS");
    req.header('Accept', '');
    // 跨域请求CORS中的预请求
    if (req.method == "OPTIONS") {
        res.sendStatus(200); /*让options请求快速返回*/
    } else {
        next();
    }
});


//posts贴子信息请求
app.use('/game/*', proxy({
    "target": "http://localhost:3010",
    "changeOrigin": true,
    "pathRewrite": {
        "^/game": ""
    }
}));

app.listen('80', function() {
    console.log('博客' + 80);
});