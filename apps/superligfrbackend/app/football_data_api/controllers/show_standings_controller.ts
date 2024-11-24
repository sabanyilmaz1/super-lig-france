import { HttpContext } from '@adonisjs/core/http'
import { BaseApiController } from './base_api_controller.js'

export default class StandingController extends BaseApiController {
  public async showStanding(ctx: HttpContext) {
    const cacheKey = 'standing'
    const apiEndpoint = `/standings?season=2024&league=203`

    return this.handleRequestWithCache(ctx, cacheKey, apiEndpoint)
  }

  public async showTopScorers(ctx: HttpContext) {
    const cacheKey = 'topScorers'
    const apiEndpoint = `/players/topscorers?season=2024&league=203`

    return this.handleRequestWithCache(ctx, cacheKey, apiEndpoint)
  }

  public async showTopAssists(ctx: HttpContext) {
    const cacheKey = 'topAssists'
    const apiEndpoint = `/players/topassists?season=2024&league=203`
    return this.handleRequestWithCache(ctx, cacheKey, apiEndpoint)
  }
}
