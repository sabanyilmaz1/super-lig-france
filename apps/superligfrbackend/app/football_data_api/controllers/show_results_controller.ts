import { HttpContext } from '@adonisjs/core/http'
import { BaseApiController } from './base_api_controller.js'
import { FOOTBALL_API_CONSTANTS } from '../constants/football-api-constant.js'

export default class ResultsController extends BaseApiController {
  // public async showLastRound(ctx: HttpContext) {
  //   const cacheKey = 'lastRound'
  //   const apiEndpoint = `/fixtures/rounds?current=true&season=${FOOTBALL_API_CONSTANTS.SEASON_ID}&league=${FOOTBALL_API_CONSTANTS.LEAGUE_ID}`
  //   return this.handleRequestWithCache(ctx, cacheKey, apiEndpoint)
  // }
  // public async showAllRounds(ctx: HttpContext) {
  //   const cacheKey = 'allRounds'
  //   const apiEndpoint = `/fixtures/rounds?season=${FOOTBALL_API_CONSTANTS.SEASON_ID}&league=${FOOTBALL_API_CONSTANTS.LEAGUE_ID}`
  //   return this.handleRequestWithCache(ctx, cacheKey, apiEndpoint)
  // }
  // public async showLastResult(ctx: HttpContext) {
  //   const cacheKey = 'result:last'
  //   const apiEndpoint = `fixtures/rounds?season=2024&league=203&current=true`
  //   return this.handleRequestWithCache<any>(ctx, cacheKey, apiEndpoint, 'GET', (lastRoundData) => {
  //     const lastRoundInt = parseInt(lastRoundData?.response[0].split('-')[1]) - 1
  //     return this.fetchFromApi<any>(
  //       'GET',
  //       `fixtures?season=${FOOTBALL_API_CONSTANTS.SEASON_ID}&league=${FOOTBALL_API_CONSTANTS.LEAGUE_ID}&round=Regular Season - ${lastRoundInt}`,
  //       ctx.auth.user!.api_football_key
  //     )
  //   })
  // }
  // public async showResultByRound(ctx: HttpContext) {
  //   const body = ctx.request.qs()
  //   const { roundId } = body
  //   const cacheKey = `resultByRound:${roundId}`
  //   const apiEndpoint = `/fixtures?season=${FOOTBALL_API_CONSTANTS.SEASON_ID}&league=${FOOTBALL_API_CONSTANTS.LEAGUE_ID}&round=Regular Season - ${roundId}`
  //   return this.handleRequestWithCache(ctx, cacheKey, apiEndpoint)
  // }
}
