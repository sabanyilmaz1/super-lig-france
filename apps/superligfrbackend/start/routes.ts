/*
|--------------------------------------------------------------------------
| Routes file
|--------------------------------------------------------------------------
|
| The routes file is used for defining the HTTP routes.
|
*/

import router from '@adonisjs/core/services/router'
import User from '../app/auth/model/user.js'
import UsersController from '../app/auth/controllers/users_controller.js'
import TeamController from '../app/football_data_api/controllers/show_team_controller.js'
import { middleware } from './kernel.js'
import FixtureController from '../app/football_data_api/controllers/show_fixture_controller.js'
import StandingController from '../app/football_data_api/controllers/show_standings_controller.js'
import ArticleController from '../app/articles/controllers/article_controller.js'

//Health check
router.get('health', ({ response }) => response.noContent())

router.get('/', async () => {
  return {
    hello: 'world',
  }
})

// Auth routes from auth controller
router.post('/login', [UsersController, 'login']).as('auth.login')
router.post('/register', [UsersController, 'register']).as('auth.register')
router.delete('/logout', [UsersController, 'logout']).as('auth.logout')
router.get('/me', [UsersController, 'me']).as('auth.me')

router.get('/users', async () => {
  const users = await User.all()
  return {
    users,
  }
})

//team
router.get('/team/:teamId', [TeamController, 'showTeam']).use(middleware.auth())

//Fixture
router.get('/lastFixture', [FixtureController, 'last']).use(middleware.auth())

//Standing
router.get('/standing', [StandingController, 'showStanding']).use(middleware.auth())
router.get('/topscorers', [StandingController, 'showTopScorers']).use(middleware.auth())
router.get('/topassists', [StandingController, 'showTopAssists']).use(middleware.auth())

router
  .group(() => {
    router.get('/articles', [ArticleController, 'index']) // Liste tous les articles
    router.get('/articles/:id', [ArticleController, 'show']) // Affiche un article spécifique
    router.post('/articles', [ArticleController, 'store']) // Crée un nouvel article
    router.put('/articles/:id', [ArticleController, 'update']) // Met à jour un article existant
    router.delete('/articles/:id', [ArticleController, 'destroy']) // Supprime un article
  })
  .use(middleware.auth())
