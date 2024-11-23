import { HttpContext } from '@adonisjs/core/http'
import User from '../models/user.js'
import { ErrorResponse } from '../utils/error-response.js'

export class AuthService {
  /**
   * Récupère l'utilisateur authentifié ou lève une erreur s'il n'est pas trouvé.
   * @param auth Le contexte d'authentification AdonisJS.
   * @returns L'utilisateur authentifié.
   * @throws Une erreur si l'utilisateur n'est pas authentifié.
   */
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
