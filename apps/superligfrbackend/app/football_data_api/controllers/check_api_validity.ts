import { HttpContext } from '@adonisjs/core/http'
import { apiFoot } from '../services/fetch_football_api.js'

export default class CheckApiValidity {
  public async checkApiValidity(ctx: HttpContext) {
    const { params } = ctx
    const apiKey = params.apiKey
    const response = await apiFoot('GET', `/status`, apiKey)
    const data = (await response.json()) as any
    return data.errors
  }
}
