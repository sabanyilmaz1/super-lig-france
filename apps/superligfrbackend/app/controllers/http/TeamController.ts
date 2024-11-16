import { HttpContext } from '@adonisjs/core/http'
import User from '../../models/user.js'
import { apiFoot } from '../../services/fetch-football-api.js'
import redis from '@adonisjs/redis/services/main'
import { timeToSaveInRedis } from '../../utils/catch-redis-time.js'

export default class TeamController {
  public async showTeam({ params, auth, response }: HttpContext) {
    try {
      const userId = auth.user?.id
      if (!userId) {
        return response.json({
          message: 'User not found',
        })
      }
      const userConnected = await User.find(userId)
      // Get the api key
      const apiKey = userConnected?.api_football_key
      const { teamId } = params

      if (!apiKey) {
        return response.json({
          message: 'Api key not found',
        })
      }

      // Vérifier dans le cache Redis
      const cacheKey = `team:${teamId}`
      const cachedData = await redis.get(cacheKey)
      if (cachedData) {
        return response.json({ message: 'Data fetched from cache', data: JSON.parse(cachedData) })
      }

      const [statisticsResponse, playersResponse] = await Promise.all([
        await apiFoot<any>(
          'GET',
          `/teams/statistics?season=2024&team=${teamId}&league=203`,
          apiKey
        ),
        await apiFoot<any>('GET', `/players/squads?team=${teamId}`, apiKey),
      ])

      // Convertir la réponse en JSON
      const statisticsData = (await statisticsResponse.json()) as any
      const playersData = (await playersResponse.json()) as any

      const ttl = await timeToSaveInRedis()
      await redis.setex(
        cacheKey,
        ttl,
        JSON.stringify({
          players: playersData.response[0].players,
          ...statisticsData.response,
        })
      ) // 86400 secondes = 24h

      return response.json({
        message: 'Data fetched successfully',
        data: {
          players: playersData.response[0].players,
          ...statisticsData.response,
        },
      })
    } catch (err) {
      return response.status(500).json({ message: err.message })
    }
  }
}
