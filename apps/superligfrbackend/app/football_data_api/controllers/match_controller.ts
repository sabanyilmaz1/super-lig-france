// import { FOOTBALL_API_CONSTANTS } from '../constants/football-api-constant.js'
import { HttpContext } from '@adonisjs/core/http'
import { BaseApiController } from './base_api_controller.js'

export default class MatchController extends BaseApiController {
  public async showMatchPreview(ctx: HttpContext) {
    const { params } = ctx
    const body = ctx.request.qs()
    const { homeTeamId, awayTeamId } = body
    const cacheKey = `fixture:${params.fixtureId}`
    const apiRequests: { method: 'GET' | 'POST'; endpoint: string }[] = [
      {
        method: 'GET',
        endpoint: `/fixtures/headtohead?h2h=${homeTeamId}-${awayTeamId}&last=4`,
      },
      { method: 'GET', endpoint: `/injuries?fixture=${params.fixtureId}` },
      { method: 'GET', endpoint: `/predictions?fixture=${params.fixtureId}` },
      { method: 'GET', endpoint: `/lineups?fixture=${params.fixtureId}` },
    ]

    return this.handleMultipleRequestsWithCache<any>(ctx, cacheKey, apiRequests, (responses) => {
      const [headToHeadResponse, injuriesResponse, predictionsResponse, lineupsResponse] = responses
      return {
        headToHead: headToHeadResponse.response,
        injuries: injuriesResponse.response,
        predictions: predictionsResponse.response,
        lineups: lineupsResponse.response,
      }
    })
  }
}
