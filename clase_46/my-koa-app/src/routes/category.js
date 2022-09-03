const Router = require('koa-router')

const router = new Router({
    prefix: '/category'
})

let categories = [
    {id:1, name:'Electrodomesticos', description:'Articulos electricos del hogar'},
    {id:3, name:'Muebles', description:'Muebles para el hogar'}
];

router.get('/', ctx => {
    ctx.body = {
        status: 'Success',
        message: categories
    }
})

router.get('/:id', ctx => {
    const categorySearched = categories.filter(category => {
        if (category.id == ctx.params.id) {
            return true;
        }
    })

    if (categorySearched.length) {
        ctx.body = {
            status: 'Success',
            message: categorySearched[0]
        }
    } else {
        ctx.response.status = 404;
        ctx.body = {
            status: 'Error',
            message: 'Category not found'
        }
    }
})

router.post('/', ctx => {
    let requestBody = ctx.request.body;

    if (!requestBody.id || !requestBody.name || !requestBody.description) {
        ctx.response.status = 400;
        ctx.body = {
            status: 'Error',
            message: 'Category data incomplete'
        }
    } else {
        let newCategory = {
            id: requestBody.id,
            name: requestBody.name,
            description: requestBody.description
        }

        categories.push(newCategory);

        ctx.response.status = 201;
        ctx.body = {
            status: 'Success',
            message: 'Category Created'
        }

    }
})

router.put('/:id', ctx => {
    let id = ctx.params.id;
    let requestBody = ctx.request.body;

    if (!requestBody.name || !requestBody.description) {
        ctx.response.status = 400;
        ctx.body = {
            status: 'Error',
            message: 'Category data incomplete'
        }
    } else {
        const index = categories.findIndex(category => category.id == id);
        requestBody.id = id;
        categories.splice(index, 1, requestBody);
        ctx.response.status = 201;
        ctx.body = {
            status: 'Success',
            message: 'Category Updated'
        }

    }
})

router.delete('/:id', ctx => {
    let id = ctx.params.id;
    const index = categories.findIndex(category => category.id == id);

    categories.splice(index, 1);
    ctx.response.status = 200;
    ctx.body = {
        status: 'Success',
        message: 'Category Deleted'
    }
})


module.exports = router;