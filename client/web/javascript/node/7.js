'use strict';

/* TODO: koa */

//async表示该方法是异步方法

var fun = async next => {
    console.log(await next());  //只有是Promise对象才会等待返回
    console.log('next 下面');
}

var next = function(){
    //Promise对象，
    return new Promise(function(success,fail){
        setTimeout(function(){
            success('success');
        },5000);
    }).then(function(data){
        return data + '!';
    }).catch(function(data){
        return data + '!!';
    });
};

fun(next);



