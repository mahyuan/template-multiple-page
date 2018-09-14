const Koa = require('koa');
const Router = require('koa-router');

const app = new Koa();
const router = new Router();
const main = ctx => {
    try {
        ctx.status = 200;
        ctx.response.body = {
            msg: "hello world"
        };
        // ctx.response.body = 'hello chrome!';
        
    } catch (e) {
        ctx.throw(500);
    }
    
};
app.use(main);
app
    .use(router.routes())
    .use(router.allowedMethods());
app.listen(3000);
