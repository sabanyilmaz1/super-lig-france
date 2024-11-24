import { HttpContext } from '@adonisjs/core/http'
import { BaseApiController } from './base_api_controller.js'

export default class ShowTeamController extends BaseApiController {
  public async showTeam(ctx: HttpContext) {
    const { params } = ctx
    const cacheKey = `team:${params.teamId}`
    const apiRequests: { method: 'GET' | 'POST'; endpoint: string }[] = [
      { method: 'GET', endpoint: `/teams/statistics?season=2024&team=${params.teamId}&league=203` },
      { method: 'GET', endpoint: `/players/squads?team=${params.teamId}` },
    ]

    return this.handleMultipleRequestsWithCache<any>(ctx, cacheKey, apiRequests, (responses) => {
      const [statisticsResponse, playersResponse] = responses

      return {
        statistics: statisticsResponse.response,
        players: playersResponse.response[0]?.players || [],
      }
    })
  }
}
