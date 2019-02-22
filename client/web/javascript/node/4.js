'use strict';

//stream模块

var fs = require('fs');

/* TODO 创建读取文件流对象 */
var rs = fs.createReadStream('2.txt','utf-8');
//正在读取中，数据流有可能是多次读取的，chunk代表每次读取的数据
rs.on('data',function(chunk){
    console.log(chunk);
    console.log('正在读取中');
});
//读取完成
rs.on('end',function(){
    console.log('读取完成');
});
//发生错误
rs.on('error',function(error){
    console.log('读取失败,错误:'+error);
});

/* TODO 创建写入文件流对象 */
var ws = fs.createWriteStream('3.txt');
//需要使用write方法一次次进行写入，以end方法进行结束
ws.write('begin');
ws.write('end');
ws.end();

/* TODO pipe */
var rs = fs.createReadStream('3.txt','utf-8');
var ws = fs.createWriteStream('4.txt');
rs.pipe(ws);

