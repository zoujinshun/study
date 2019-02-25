var index_get = async (ctx,next) => {
    ctx.response.status = 200;
    ctx.response.body = 'index';
};

module.exports = {
    'Get /index' : index_get
};