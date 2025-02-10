import { HttpContext } from '@adonisjs/core/http'
import { BaseApiController } from './base_api_controller.js'

export default class FixtureController extends BaseApiController {
  public async last(ctx: HttpContext) {
    const apiEndpoint = `/fixtures/upcoming/markets/1`
    return this.handleApiRequest(ctx, apiEndpoint, 'include=participants;round')
  }
}
