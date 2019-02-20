'use strict';

var fs = require('fs');

fs.readFile('./1.txt','utf8',function (error,data) {
    if(error){
        console.log('read file error');
    }else{
        console.log('data:'+data);
    }
});