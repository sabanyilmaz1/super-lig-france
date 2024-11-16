import { HttpContext } from '@adonisjs/core/http'

export class ErrorResponse {
  /**
   * Génère une réponse JSON pour les erreurs
   * @param response L'objet réponse AdonisJS
   * @param message Le message d'erreur à afficher
   * @param statusCode Le code HTTP (par défaut 400)
   */
  public static send(response: HttpContext['response'], message: string) {
    return response.json({
      message,
    })
  }
}
