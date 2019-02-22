'use strict';

//fs模块

var fs = require('fs');

//异步读取文件
fs.readFile('./1.txt','utf8',function (error,data) {
    if(error){
        console.log('read file error');
    }else{
        console.log('data:'+data);
    }
});

//同步读取文件
try{
    var data = fs.readFileSync('./1.txt','utf-8');
}catch (e){
    console.log('error:'+e)
}finally {
    console.log(data);
}

//写文件
var data = '好好学习，天天向上';
fs.writeFile('./2.txt',data,function(error){
    if(error){
        console.log('写入文件失败,原因:'+error);
    }else{
        console.log('写入文件成功');
    }
});


//文件属性对象
fs.stat('2.txt',function(error,stat){
    if(error){
        console.log(error);
    }else{
        console.log(stat);
    }
});




