'use strict';

const Koa = require('koa');
const app = new Koa;
const router = require('koa-router')();
const nunjucks = require(__dirname + '/controllers/nunjucks');
const createNunjucks = nunjucks.createNunjucks;
const fs = require('fs');

app.use(async (ctx,next)=>{
    await next();
});

router.get('/index.html',async (ctx,next)=>{
    var tmp = createNunjucks({});
    ctx.tmp = tmp;
    fs.stat(__dirname + '/views/index.html',function(err,stat){
        if(!err && stat.isFile()){
            console.log(ctx);
            ctx.response.headers = {'content-type':'text/html'};
            ctx.response.status = 200;
            ctx.response.body   = 'index';
            //ctx.tmp.render('index.html',{});
        }else{
            console.log('not found');
            ctx.response.body = 'not found';
        }
    });
});

app.use(router.routes());

app.listen(3000);
console.log('App Start');