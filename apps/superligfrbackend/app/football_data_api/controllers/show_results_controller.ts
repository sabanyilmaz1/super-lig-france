import { HttpContext } from '@adonisjs/core/http'
import { BaseApiController } from './base_api_controller.js'

export default class ResultsController extends BaseApiController {
  public async ResultsByDateRange(ctx: HttpContext) {
    const apiEndpoint = `/fixtures/between/${ctx.params.startingDate}/${ctx.params.endingDate}`
    return this.handleApiRequest(ctx, apiEndpoint, 'include=participants;scores;venue')
  }
}
