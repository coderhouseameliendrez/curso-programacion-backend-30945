'use strict'

/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URL's and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/docs/4.1/routing
|
*/

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use('Route')

Route.on('/').render('welcome')
Route.on('/coders').render('coders')

const Orders = use('App/Models/Order')

Route.get('/orders', async ({view}) => {
    let result = await Orders.all();
    let orders = result.toJSON();

    return view.render('orderlist', {orders})
})

Route.get('/categories', 'CategoryController.index')