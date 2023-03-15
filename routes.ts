/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| This file is dedicated for defining HTTP routes. A single file is enough
| for majority of projects, however you can define routes in different
| files and just make sure to import them inside this file. For example
|
| Define routes in following two files
| ├── start/routes/cart.ts
| ├── start/routes/customer.ts
|
| and then import them inside `start/routes.ts` as follows
|
| import './routes/cart'
| import './routes/customer'
|
*/

import Route from '@ioc:Adonis/Core/Route'

Route.get('/', async () => {
  return { hello: 'world' }
})
// Route.get('/', async ({ view }) => {
//   return view.render('welcome')
// })

// Register endpoint
Route.post('register','AuthController.register').as('auth.register')
// Login endpoint
Route.get('register','AuthController.registerShow').as('auth.register.show')
Route.get('login','AuthController.loginShow').as('auth.login.show')
Route.post('login', 'AuthController.login').as('auth.login')
// Route.get('profile', 'AuthController.profile').as('auth.profile')
// Add a new route for user profile
Route.get('/profile/:id', async ({ response }) => {
  return response.redirect().toRoute('auth.login')
}).as('profile.show')

Route.get('/password/forgot', 'PasswordResetController.forgot').as('password.forgot')
Route.post('/password/send', 'PasswordResetController.send').as('password.send')
Route.get('/password/reset/:token', 'PasswordResetController.reset').as('password.reset')
Route.post('/password/store', 'PasswordResetController.store').as('password.store')

// Route.get('profile', 'AuthController.login').as('auth.login')          // ++
Route.get('logout', 'AuthController.logout').as('auth.logout')        // ++

// Profile endpoint
Route.post('/create/:username', 'PostsController.store').middleware(['auth'])
// Route.put('/profile', 'AuthController.update').middleware('auth') 