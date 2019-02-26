'use strict';

/* TODO: nunjucks 模板引擎 */

const nunjucks = require('nunjucks');

function createNunjucks(params){
    var nunjucks = params.nunjucks || require('nunjucks');
    var autoescape = params.autoescape || true;
    var noCache = params.noCache || true;
    var path = params.path || '/views';
    return nunjucks.configure(path,{
        autoescape : autoescape,
        noCache : noCache
    });
}

module.exports = {
    createNunjucks : createNunjucks
};

