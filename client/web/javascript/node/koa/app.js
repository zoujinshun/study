'use strict';

/* TODO:Koa基础 */

var Koa = require('koa');
var url = require('url');

var app = new Koa();

// TODO:无论任何请求都会进use方法，执行next将会进入下一个middleware（use方法），参数ctx封装了request和response对象
app.use(async(ctx, next) = > {
    var result = await fun(ctx);
if (result) {
    ctx.response.status = 200;
    ctx.response.body = '<h1>Success</h1>';
} else {
    ctx.response.status = 200;
    ctx.response.body = '<h1>Fail</h1>';
}
})
;

function fun(ctx) {
    var pathname = url.parse(ctx.request.url).pathname;
    return new Promise(function (success, fail) {
        if (pathname == '/index.html') {
            success(true);
        } else {
            fail(false);
        }
    });
}

// TODO：监听3000端口
app.listen(3000);
console.log('App Server Start!!!');






