'use strict';

var Koa = require('koa');
var url = require('url');

var app = new Koa();

app.use(async (ctx,next) => {
    var result = await fun(ctx);
    if(result){
        ctx.response.status = 200;
        ctx.response.body = '<h1>Success</h1>';
    }else{
        ctx.response.status = 200;
        ctx.response.body = '<h1>Fail</h1>';
    }
});

function fun(ctx){
    var pathname = url.parse(ctx.request.url).pathname;
    return new Promise(function(success,fail){
        if(pathname == '/index.html'){
            success(true);
        }else{
            fail(false);
        }
    });
}

app.listen(3000);

console.log('App Server Start!!!');