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
import FixtureController from '../app/football_data_api/controllers/show_fixture_controller.js'
import StandingController from '../app/football_data_api/controllers/show_standings_controller.js'
import ArticleController from '../app/articles/controllers/article_controller.js'
import MatchController from '../app/football_data_api/controllers/match_controller.js'
import CheckApiValidity from '../app/football_data_api/controllers/check_api_validity.js'
import { middleware } from './kernel.js'

// Health Check Route
router.get('health', ({ response }) => response.noContent())

router.get('/', async () => {
  return { hello: 'world' }
})

// AUTH ROUTES
router.group(() => {
  router.post('/login', [UsersController, 'login']).as('auth.login')
  router.post('/register', [UsersController, 'register']).as('auth.register')
  router.delete('/logout', [UsersController, 'logout']).as('auth.logout')
  router.get('/me', [UsersController, 'me']).as('auth.me')
})

// USER MANAGEMENT ROUTES
router.get('/users', async () => {
  const users = await User.all()
  return { users }
})

// API VALIDITY CHECK
router.get('/check-api-key/:apiKey', [CheckApiValidity, 'checkApiValidity']).use(middleware.auth())

// FOOTBALL DATA API
router
  .group(() => {
    // Team-related routes
    router.get('/team/:teamId', [TeamController, 'showTeam'])

    // Fixture-related routes
    router.get('/lastFixture', [FixtureController, 'last'])

    // Standing-related routes
    router.get('/standing', [StandingController, 'showStanding'])
    router.get('/topscorers', [StandingController, 'showTopScorers'])
    router.get('/topassists', [StandingController, 'showTopAssists'])

    // Match Preview
    router.get('/match_preview/:fixtureId', [MatchController, 'showMatchPreview'])
  })
  .use(middleware.auth())

// ARTICLE ROUTES
router
  .group(() => {
    router.get('/', [ArticleController, 'index'])
    router.get('/last-four', [ArticleController, 'showLastFourArticles'])
    router.get('/:id', [ArticleController, 'show'])
    router.post('/', [ArticleController, 'store'])
    router.put('/:id', [ArticleController, 'update'])
    router.delete('/:id', [ArticleController, 'destroy'])
  })
  .prefix('/articles')
  .use(middleware.auth())
