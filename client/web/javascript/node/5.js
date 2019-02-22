'use strict';

/* TODO: http模块 */

var http = require('http');

//创建服务
var server = http.createServer(function(request,response){

    console.log(request);
    console.log(response);

    response.writeHead(200,{'Content-Type':'text/html'});
    response.end('<h1>hello,node.js</h1>');
});

server.listen(8888);

console.log('server start!!!');