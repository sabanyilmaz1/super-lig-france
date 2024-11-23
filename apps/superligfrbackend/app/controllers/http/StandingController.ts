import { HttpContext } from '@adonisjs/core/http'

import { apiFoot } from '../../services/fetch-football-api.js'
import redis from '@adonisjs/redis/services/main'
import { AuthService } from '../../services/auth.js'
import { ErrorResponse } from '../../utils/error-response.js'
import { CacheService } from '../../services/catch-redis.js'
import { ResponseHelper } from '../../utils/response-helper.js'
import { getTTL } from '../../utils/match-windows.js'

export default class StandingController {
  public async showStanding({ auth, response }: HttpContext) {
    try {
      const userConnected = await AuthService.getAuthenticatedUser(auth, response)

      const apiKey = userConnected?.api_football_key
      if (!apiKey) {
        return ErrorResponse.send(response, 'Api key not found')
      }

      // Vérifier dans le cache Redis
      const cacheKey = `standing`
      const cachedData = await CacheService.get(cacheKey)
      if (cachedData) {
        return ResponseHelper.sendCachedData(response, cachedData)
      }

      const standing = await apiFoot<any>('GET', `/standings?season=2024&league=203`, apiKey)
      const standingData = await standing.json()

      await CacheService.set(cacheKey, standingData)

      return ResponseHelper.sendFetchedData(response, standingData)
    } catch (err) {
      return response.status(500).json({ message: err.message })
    }
  }

  public async showTopScorers({ auth, response }: HttpContext) {
    try {
      const userConnected = await AuthService.getAuthenticatedUser(auth, response)
      if (!userConnected) {
        return ErrorResponse.send(response, 'User not found')
      }

      const apiKey = userConnected?.api_football_key
      if (!apiKey) {
        return ErrorResponse.send(response, 'Api key not found')
      }
      // Vérifier dans le cache Redis
      const cacheKey = `topScorers`
      const cachedData = await redis.get(cacheKey)
      if (cachedData) {
        return ResponseHelper.sendCachedData(response, cachedData)
      }

      const topScorers = await apiFoot<any>(
        'GET',
        `/players/topscorers?season=2024&league=203`,
        apiKey
      )
      const topScorersData = await topScorers.json()

      await CacheService.set(cacheKey, topScorersData)

      return ResponseHelper.sendFetchedData(response, topScorersData)
    } catch (err) {
      return response.status(500).json({ message: err.message })
    }
  }

  public async showTopAssists({ auth, response }: HttpContext) {
    try {
      const userConnected = await AuthService.getAuthenticatedUser(auth, response)
      if (!userConnected) {
        return ErrorResponse.send(response, 'User not found')
      }

      const apiKey = userConnected?.api_football_key
      if (!apiKey) {
        return ErrorResponse.send(response, 'Api key not found')
      }

      // Vérifier dans le cache Redis
      const cacheKey = `topAssists`
      const cachedData = await redis.get(cacheKey)
      if (cachedData) {
        return ResponseHelper.sendCachedData(response, cachedData)
      }

      const topAssists = await apiFoot<any>(
        'GET',
        `/players/topassists?season=2024&league=203`,
        apiKey
      )
      const topAssistsData = await topAssists.json()

      const ttl = await getTTL()

      // Stocker la réponse dans Redis (par exemple, pendant 24 heures)
      await redis.setex(cacheKey, ttl, JSON.stringify(topAssistsData)) // 86400 secondes = 24h

      return response.json({
        message: 'Data fetched successfully',
        data: topAssistsData,
      })
    } catch (err) {
      return response.status(500).json({ message: err.message })
    }
  }
}
