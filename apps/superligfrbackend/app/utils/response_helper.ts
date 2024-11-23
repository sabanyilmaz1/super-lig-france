import { HttpContext } from '@adonisjs/core/http'

export class ResponseHelper {
  /**
   * Génère une réponse JSON avec des données.
   * @param response L'objet réponse AdonisJS.
   * @param data Les données à inclure dans la réponse.
   * @param message Un message optionnel.
   * @param statusCode Le code HTTP (par défaut 200).
   */
  public static sendData(response: HttpContext['response'], data: any, message: string) {
    return response.json({ message, data })
  }

  public static sendCachedData(
    response: HttpContext['response'],
    cachedData: any,
    message = 'Data fetched from cache'
  ) {
    const parsedData = JSON.parse(cachedData)
    return this.sendData(response, parsedData, message)
  }

  public static sendFetchedData(
    response: HttpContext['response'],
    data: any,
    message = 'Data fetched successfully'
  ) {
    return this.sendData(response, data, message)
  }
}
