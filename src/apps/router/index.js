const Router = require('koa-router');
const convert = require('koa-convert');
const router = new Router();
const qs = require('../../middlewares/qs');

const main = ctx => {
    try {
        ctx.status = 200;
        ctx.response.body = {
            code: 0,
            msg: 'hello world'
        }
        console.log('this', this)
        console.log('ctx', ctx)
    } catch(e) {
        ctx.throw(t00);
    }
}
// router.get('/', main);

router.get('/', '/index', async function(ctx, next) {
    ctx.body = {
        code: 2,
        say: 'hello'
    }
    await next()
})

router.get('/friend', function* (next) {
    // console.log('this', this);
    // this.response.body = {
        //     code: 1,
        //     data: 'hello friend!'
        // }
        this.body = 'dsddd';
        console.log('this', this);
        console.log('ctx', ctx);
        
        // yield next;
        yield this.render('../views/index', {
            __html: ''
        })
})

module.exports = router;
