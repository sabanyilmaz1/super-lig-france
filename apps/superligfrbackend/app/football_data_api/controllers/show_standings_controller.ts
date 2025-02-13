import { HttpContext } from '@adonisjs/core/http'
import { BaseApiController } from './base_api_controller.js'
import { FOOTBALL_SPORTMONK_API_CONSTANTS } from '../constants/api_constant.js'

export default class StandingController extends BaseApiController {
  public async showStanding(ctx: HttpContext) {
    const apiEndpoint = `/standings/live/leagues/${FOOTBALL_SPORTMONK_API_CONSTANTS.LEAGUE_ID}`
    return this.handleApiRequest(ctx, apiEndpoint, 'include=participant;details.type')
  }

  public async showTopScorers(ctx: HttpContext) {
    const apiEndpoint = `/topscorers/seasons/${FOOTBALL_SPORTMONK_API_CONSTANTS.SEASON_ID}`
    return this.handleApiRequest(
      ctx,
      apiEndpoint,
      'include=participant;player&filters=seasontopscorerTypes:208'
    )
  }

  public async showTopAssists(ctx: HttpContext) {
    const apiEndpoint = `/topscorers/seasons/${FOOTBALL_SPORTMONK_API_CONSTANTS.SEASON_ID}`
    return this.handleApiRequest(
      ctx,
      apiEndpoint,
      'include=type;participant;player&filters=seasontopscorerTypes:209'
    )
  }

  public async showTopRedCards(ctx: HttpContext) {
    const apiEndpoint = `/topscorers/seasons/${FOOTBALL_SPORTMONK_API_CONSTANTS.SEASON_ID}`
    return this.handleApiRequest(
      ctx,
      apiEndpoint,
      'include=type;participant;player&filters=seasontopscorerTypes:83'
    )
  }

  public async showTopYellowCards(ctx: HttpContext) {
    const apiEndpoint = `/topscorers/seasons/${FOOTBALL_SPORTMONK_API_CONSTANTS.SEASON_ID}`
    return this.handleApiRequest(
      ctx,
      apiEndpoint,
      'include=type;participant;player&filters=seasontopscorerTypes:84'
    )
  }

  public async showTopPenaltiesScored(ctx: HttpContext) {
    const apiEndpoint = `/topscorers/seasons/${FOOTBALL_SPORTMONK_API_CONSTANTS.SEASON_ID}`
    return this.handleApiRequest(
      ctx,
      apiEndpoint,
      'include=type;participant;player&filters=seasontopscorerTypes:1600'
    )
  }

  public async showTopPenaltiesMissed(ctx: HttpContext) {
    const apiEndpoint = `/topscorers/seasons/${FOOTBALL_SPORTMONK_API_CONSTANTS.SEASON_ID}`
    return this.handleApiRequest(
      ctx,
      apiEndpoint,
      'include=type;participant;player&filters=seasontopscorerTypes:1601'
    )
  }
}
