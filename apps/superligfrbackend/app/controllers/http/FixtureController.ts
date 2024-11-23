import { HttpContext } from '@adonisjs/core/http'
import { apiFoot } from '../../services/fetch-football-api.js'

import { AuthService } from '../../services/auth.js'
import { ErrorResponse } from '../../utils/error-response.js'
import { ResponseHelper } from '../../utils/response-helper.js'
import { CacheService } from '../../services/catch-redis.js'

import { ResponseApiFoot } from '@monorepo/shared/types/api-foot.js'

export default class FixtureController {
  public async showLastFixture({ auth, response }: HttpContext) {
    try {
      const userConnected = await AuthService.getAuthenticatedUser(auth, response)

      const apiKey = userConnected?.api_football_key
      if (!apiKey) {
        return ErrorResponse.send(response, 'Api key not found')
      }

      // Vérifier dans le cache Redis
      const cacheKey = `fixture:last`
      const cachedData = await CacheService.get(cacheKey)
      if (cachedData) {
        return ResponseHelper.sendCachedData(response, cachedData)
      }

      const lastRound = await apiFoot<any>(
        'GET',
        `fixtures/rounds?season=2024&league=203&current=true`,
        apiKey
      )
      const lastRoundData = (await lastRound.json()) as ResponseApiFoot<any>
      const lastRoundInt = parseInt(lastRoundData?.response[0].split('-')[1])

      const lastFixture = await apiFoot<any>(
        'GET',
        `fixtures?season=2024&league=203&round=Regular Season - ${lastRoundInt}`,
        apiKey
      )
      const lastFixtureData = (await lastFixture.json()) as ResponseApiFoot<any>

      await CacheService.set(cacheKey, lastFixtureData)

      return ResponseHelper.sendFetchedData(response, lastFixtureData)
    } catch (err) {
      return response.status(500).json({ message: err.message })
    }
  }
}
