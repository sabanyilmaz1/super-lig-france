import { HttpContext } from '@adonisjs/core/http'
import User from '../auth/model/user.js'
import { ErrorResponse } from '../utils/error_response.js'

export class AuthService {
  public static async getAuthenticatedUser(
    auth: HttpContext['auth'],
    response: HttpContext['response']
  ) {
    const userId = auth.user?.id

    if (!userId) {
      return ErrorResponse.send(response, 'User not found')
    }

    const user = await User.find(userId)

    if (!user) {
      throw new Error('User not found in the database')
    }

    return user
  }
}
