'use strict';

/* TODO: 文件服务器 */

var
    fs   = require('fs'),
    http = require('http'),
    url  = require('url'),
    path = require('path');

//解析根目录，默认为当前目录
var root = path.resolve(process.argv[2] || '.');

//创建http服务
var server = http.createServer(function(request,response){
    //解析url
    var urlInfo = url.parse(request.url);
    var fullPath = path.join(root,urlInfo.pathname);
    //文件状态
    fs.stat(fullPath,function(error,stat){
        if(!error && stat.isFile()){
            response.writeHead(200,{'Content-Type':'text/html','charest':'utf-8'});
            fs.createReadStream(fullPath,'utf-8').pipe(response);
        }else{
            response.writeHead(404);
            response.end('<h1>File Not Found!!!</h1>');
        }
    });
});

server.listen(8888);

console.log('HttpServer Start!!!');