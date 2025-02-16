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

import { middleware } from './kernel.js'
import ArticleController from '../app/articles/controllers/article_controller.js'

const UsersController = () => import('../app/auth/controllers/users_controller.js')
const ResultsController = () =>
  import('../app/football_data_api/controllers/show_results_controller.js')
const StandingController = () =>
  import('../app/football_data_api/controllers/show_standings_controller.js')
const MatchController = () => import('../app/football_data_api/controllers/match_controller.js')
const FixtureController = () =>
  import('../app/football_data_api/controllers/show_fixture_controller.js')

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

// FOOTBALL DATA API
router
  .group(() => {
    // Team-related routes
    // router.get('/team/:teamId', [TeamController, 'showTeam'])

    // Fixture-related routes
    router.get('/lastFixture', [FixtureController, 'last'])
    router.get('/allRounds', [FixtureController, 'allRounds'])
    router.get('/fixturesByDateRange/:startingDate/:endingDate', [
      FixtureController,
      'fixturesByDateRange',
    ])

    // Standing-related routes
    router.get('/standing', [StandingController, 'showStanding'])
    router.get('/topscorers', [StandingController, 'showTopScorers'])
    router.get('/topassists', [StandingController, 'showTopAssists'])

    // Match Preview
    // router.get('/match_preview/:fixtureId', [MatchController, 'showMatchPreview'])

    //Results
    // router.get('/lastRound', [ResultsController, 'showLastRound'])
    // router.get('/allRounds', [ResultsController, 'showAllRounds'])
    // router.get('/lastResults', [ResultsController, 'showLastResult'])
    // router.get('/results', [ResultsController, 'showResultByRound'])
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
