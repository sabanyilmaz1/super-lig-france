import { HttpContext } from '@adonisjs/core/http'
import { BaseApiController } from './base_api_controller.js'
import { FOOTBALL_API_CONSTANTS } from '../constants/football-api-constant.js'

export default class StandingController extends BaseApiController {
  public async showStanding(ctx: HttpContext) {
    const cacheKey = 'standing'
    const apiEndpoint = `/standings?season=${FOOTBALL_API_CONSTANTS.SEASON_ID}&league=${FOOTBALL_API_CONSTANTS.LEAGUE_ID}`

    return this.handleRequestWithCache(ctx, cacheKey, apiEndpoint)
  }

  public async showTopScorers(ctx: HttpContext) {
    const cacheKey = 'topScorers'
    const apiEndpoint = `/players/topscorers?season=${FOOTBALL_API_CONSTANTS.SEASON_ID}&league=${FOOTBALL_API_CONSTANTS.LEAGUE_ID}`

    return this.handleRequestWithCache(ctx, cacheKey, apiEndpoint)
  }

  public async showTopAssists(ctx: HttpContext) {
    const cacheKey = 'topAssists'
    const apiEndpoint = `/players/topassists?season=${FOOTBALL_API_CONSTANTS.SEASON_ID}&league=${FOOTBALL_API_CONSTANTS.LEAGUE_ID}`
    return this.handleRequestWithCache(ctx, cacheKey, apiEndpoint)
  }
}
