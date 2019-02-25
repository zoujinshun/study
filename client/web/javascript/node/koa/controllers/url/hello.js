var hello_get = async (ctx,next) => {
    ctx.response.status = 200;
    ctx.response.body = 'hello';
};

module.exports = {
    'Get /hello' : hello_get
};