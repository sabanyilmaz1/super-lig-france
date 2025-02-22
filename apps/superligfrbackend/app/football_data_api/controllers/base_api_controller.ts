import { HttpContext } from '@adonisjs/core/http'
import { fetchFootballSportmonkApi } from '../services/fetch_football_sportmonk_api.js'

type DataResponse = {
  data: any[]
  subscription: any[]
  rate_limit: any
  timezone: string
}

export abstract class BaseApiController {
  protected async handleApiRequest<T>(
    ctx: HttpContext,
    endpoint: string,
    params: string,
    processApiResponse?: (data: T) => any
  ): Promise<any> {
    try {
      // Appel à l'API externe
      const apiResponse = await fetchFootballSportmonkApi(endpoint, params)
      const data = (await apiResponse.json()) as DataResponse
      if (processApiResponse) {
        return processApiResponse(data as T)
      }
      return data.data ?? []
    } catch (error) {
      console.error('Error in API request:', error)
      return ctx.response.status(500).json({
        error: 'Une erreur est survenue lors de la récupération des données',
      })
    }
  }
}
