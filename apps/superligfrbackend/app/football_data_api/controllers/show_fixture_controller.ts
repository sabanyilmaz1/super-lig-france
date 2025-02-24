import { HttpContext } from '@adonisjs/core/http'
import { BaseApiController } from './base_api_controller.js'
import { FOOTBALL_SPORTMONK_API_CONSTANTS } from '../constants/api_constant.js'

export default class FixtureController extends BaseApiController {
  public async allRounds(ctx: HttpContext) {
    const apiEndpoint = `/rounds/seasons/${FOOTBALL_SPORTMONK_API_CONSTANTS.SEASON_ID}`
    return this.handleApiRequest(ctx, apiEndpoint, '')
  }

  public async fixturesByDateRange(ctx: HttpContext) {
    const apiEndpoint = `/fixtures/between/${ctx.params.startingDate}/${ctx.params.endingDate}`
    return this.handleApiRequest(ctx, apiEndpoint, 'include=participants;scores;state')
  }

  public async fixtureById(ctx: HttpContext) {
    const apiEndpoint = `/fixtures/${ctx.params.fixtureId}`
    return this.handleApiRequest(
      ctx,
      apiEndpoint,
      'include=formations;lineups.player;sidelined.sideline.player;metadata;sidelined.sideline.team;participants'
    )
  }
}
