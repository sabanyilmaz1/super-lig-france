import { HttpContext } from '@adonisjs/core/http'
import User from '../models/user.js'

export class AuthService {
  /**
   * Récupère l'utilisateur authentifié ou lève une erreur s'il n'est pas trouvé.
   * @param auth Le contexte d'authentification AdonisJS.
   * @returns L'utilisateur authentifié.
   * @throws Une erreur si l'utilisateur n'est pas authentifié.
   */
  public static async getAuthenticatedUser(auth: HttpContext['auth']): Promise<User | null> {
    const userId = auth.user?.id

    if (!userId) {
      throw new Error('User not authenticated or not found')
    }

    const user = await User.find(userId)

    if (!user) {
      throw new Error('User not found in the database')
    }

    return user
  }
}
