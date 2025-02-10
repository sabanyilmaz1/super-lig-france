import { Http } from "~/core/api/http";

export class StandingService extends Http {
  async getStanding() {
    const response = await this.get("/standing");
    return response;
  }
}
