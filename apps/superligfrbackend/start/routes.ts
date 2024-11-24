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
import TeamController from '../app/football_data_api/controllers/team_controller.js'
import { middleware } from './kernel.js'
import FixtureController from '../app/football_data_api/controllers/fixture_controller.js'
import StandingController from '../app/football_data_api/controllers/standing_controller.js'

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
router.get('/lastFixture', [FixtureController, 'showLastFixture']).use(middleware.auth())

//Standing
router.get('/standing', [StandingController, 'showStanding']).use(middleware.auth())
router.get('/topscorers', [StandingController, 'showTopScorers']).use(middleware.auth())
router.get('/topassists', [StandingController, 'showTopAssists']).use(middleware.auth())
