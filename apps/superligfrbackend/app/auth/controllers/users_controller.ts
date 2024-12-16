// import type { HttpContext } from '@adonisjs/core/http'

import { HttpContext } from '@adonisjs/core/http'
import User from '../model/user.js'
import { loginValidator, registerValidator } from '../validators/auth_validator.js'

export default class UsersController {
  public async register({ request, response }: HttpContext) {
    const data = await request.validateUsing(registerValidator)
    const user = await User.create(data)
    const tokenInformation = await User.accessTokens.create(user)
    return response.created({
      ...user,
      token: tokenInformation.value!.release(),
    })
  }

  public async login({ request, response }: HttpContext) {
    const { email, password } = await request.validateUsing(loginValidator)

    const user = await User.verifyCredentials(email, password)

    if (!user) {
      return response.unauthorized('Invalid credentials')
    }

    return User.accessTokens.create(user)
  }

  public async logout({ auth }: HttpContext) {
    const user = auth.user!
    await User.accessTokens.delete(user, user.currentAccessToken.identifier)
    return {
      message: 'Logged out successfully',
    }
  }

  public async me({ auth }: HttpContext) {
    await auth.check()
    return {
      user: auth.user,
    }
  }

  public async deleteUser({ request, response }: HttpContext) {
    const user = await User.find(request.input('id'))
    if (!user) {
      return response.notFound('User not found')
    }
    await user.delete()
    return response.noContent()
  }
}
