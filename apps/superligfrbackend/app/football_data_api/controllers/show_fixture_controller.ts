import { HttpContext } from '@adonisjs/core/http'
import { BaseApiController } from './base_api_controller.js'

export default class FixtureController extends BaseApiController {
  public async last(ctx: HttpContext) {
    const cacheKey = 'fixture:last'
    const apiEndpoint = `fixtures/rounds?season=2024&league=203&current=true`

    return this.handleRequestWithCache<any>(ctx, cacheKey, apiEndpoint, 'GET', (lastRoundData) => {
      const lastRoundInt = parseInt(lastRoundData?.response[0].split('-')[1])
      return this.fetchFromApi<any>(
        'GET',
        `fixtures?season=2024&league=203&round=Regular Season - ${lastRoundInt}`,
        ctx.auth.user!.api_football_key
      )
    })
  }
}
