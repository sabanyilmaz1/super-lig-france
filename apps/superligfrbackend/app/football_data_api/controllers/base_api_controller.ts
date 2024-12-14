import { HttpContext } from '@adonisjs/core/http'
import { AuthService } from '../../services/auth.js'
import { CacheService } from '../../services/catch_redis.js'
import { apiFoot } from '../services/fetch_football_api.js'
import { ResponseHelper } from '../../utils/response_helper.js'
import { ErrorResponse } from '../../utils/error_response.js'

export abstract class BaseApiController {
  /**
   * Gère un appel API avec cache
   * @param ctx Le contexte HTTP
   * @param cacheKey La clé Redis pour le cache
   * @param apiEndpoint L'endpoint API externe
   * @param method La méthode HTTP (GET, POST, etc.)
   * @param processApiResponse Fonction pour post-traiter les données API (facultatif)
   * @returns La réponse formatée
   */
  protected async handleRequestWithCache<T>(
    ctx: HttpContext,
    cacheKey: string,
    apiEndpoint: string,
    method: 'GET' | 'POST' = 'GET',
    processApiResponse?: (data: T) => any
  ): Promise<any> {
    const { auth, response } = ctx

    try {
      const apiKey = await this.getUserApiKey(auth, response)
      if (!apiKey) return

      const cachedData = await this.getCachedData(cacheKey)
      const jsonCachedData = JSON.parse(cachedData)
      if (cachedData && !jsonCachedData.errors.token) {
        return ResponseHelper.sendCachedData(response, cachedData)
      }

      let apiData = await this.fetchFromApi<T>(method, apiEndpoint, apiKey)

      if (processApiResponse) {
        apiData = await processApiResponse(apiData)
      }

      await this.setCachedData(cacheKey, apiData)

      return ResponseHelper.sendFetchedData(response, apiData)
    } catch (err) {
      return response.status(500).json({ message: err.message })
    }
  }

  protected async handleMultipleRequestsWithCache<T>(
    ctx: HttpContext,
    cacheKey: string,
    apiRequests: { method: 'GET' | 'POST'; endpoint: string }[],
    processApiResponse?: (responses: T[]) => any
  ): Promise<any> {
    const { auth, response } = ctx

    try {
      // Récupérer l'API Key de l'utilisateur
      const apiKey = await this.getUserApiKey(auth, response)
      if (!apiKey) return

      // Vérifier dans le cache Redis
      const cachedData = await this.getCachedData(cacheKey)
      const jsonCachedData = JSON.parse(cachedData)
      if (cachedData && !jsonCachedData.errors.token) {
        return ResponseHelper.sendCachedData(response, cachedData)
      }

      // Effectuer les appels API en parallèle
      const apiResponses = await Promise.all(
        apiRequests.map((request) =>
          this.fetchFromApi<any>(request.method, request.endpoint, apiKey)
        )
      )

      // Post-traitement des réponses combinées
      let finalData = apiResponses
      if (processApiResponse) {
        finalData = await processApiResponse(apiResponses)
      }

      // Stocker les données dans le cache
      await this.setCachedData(cacheKey, finalData)

      // Envoyer les données au client
      return ResponseHelper.sendFetchedData(response, finalData)
    } catch (err) {
      return response.status(500).json({ message: err.message })
    }
  }

  /**
   * Récupère l'utilisateur connecté et son API key
   */
  private async getUserApiKey(
    auth: HttpContext['auth'],
    response: HttpContext['response']
  ): Promise<string | null> {
    const userConnected = await AuthService.getAuthenticatedUser(auth, response)

    if (!userConnected || !userConnected.api_football_key) {
      ErrorResponse.send(response, 'Api key not found')
      return null
    }

    return userConnected.api_football_key
  }

  /**
   * Vérifie si des données existent dans le cache
   */
  private async getCachedData(cacheKey: string): Promise<any | null> {
    return await CacheService.get(cacheKey)
  }

  /**
   * Stocke les données dans le cache avec une clé
   */
  private async setCachedData(cacheKey: string, data: any): Promise<void> {
    await CacheService.set(cacheKey, data) // Par défaut : 24h
  }

  /**
   * Effectue un appel API via `apiFoot`
   */
  protected async fetchFromApi<T>(
    method: 'GET' | 'POST',
    endpoint: string,
    apiKey: string
  ): Promise<T> {
    const response = await apiFoot(method, endpoint, apiKey)
    // Conversion explicite de la réponse en type T
    const data = (await response.json()) as T
    return data
  }
}
