'use strict';

/* TODO: koa-router 和 koa-bodyparser(用来解析原始请求对象) */
/*
var
    Koa = require('koa'),
    router = require('koa-router')(),
    bodyparser = require('koa-bodyparser'),
    app = new Koa;

app.use(async(ctx, next) = > {
    await next();
})
;

router.get('/', (ctx, next) = > {
    ctx.response.status = 200;
ctx.response.body = '<form action="/test" method="post">' +
    '<labal>name:</labal><input type="text" name="name">' +
    '<labal>password:</labal><input type="password" name="password">' +
    '<input type="submit" value="submit">' +
    '</form>';
})
;

router.post('/test', (ctx, next) = > {
    var name = ctx.request.body.name;
var pwd = ctx.request.body.password;
if (!name || !pwd || name != 'zjs' || pwd != 'dly') {
    ctx.response.body = 'please input';
} else {
    ctx.response.status = 200;
    ctx.response.body = `hello,${name}`;
}
})
;

// TODO:注册bodyparser(得先在router之前注册)
app.use(bodyparser());
// TODO:注册router
app.use(router.routes());

app.listen(3000);
console.log('App Server Start!!!');
*/
/*TODO:代码优化，将url处理放置在controllers中，一次性导入*/

const fs = require('fs');
const route = require('koa-router')();
const Koa = require('koa');
const app = new Koa;
const bodyparser = require('koa-bodyparser');

function addUrlMaping(route){
    var dir = __dirname + '/controllers/url/';
    var files = fs.readdirSync(dir);
    files.filter((name)=>{
        return name.endsWith('.js');
    });
    for(var file of files){
        var mapings = require(dir  + file);
        addControllers(route,mapings);
    }
}

function addControllers(route,mapings){
    for(var url in mapings){
        //get处理
        if(url.startsWith('Get')){
            var path = url.substring(4);
            route.get(path,mapings[url]);
        }
        //post处理
        if(url.startsWith('Post')){
            var path = url.substring(5);
            route.post(path,mapings[url]);
        }
    }
};

addUrlMaping(route);

app.use(async(ctx,next) => {
    await next();
});
app.use(bodyparser());
app.use(route.routes());

app.listen(3000);
console.log('App Start!!!');
