import { Http } from "~/core/api/http";

export class StandingService extends Http {
  async getStanding() {
    const response = await this.get("/standing");
    return response;
  }

  async getTopScorers() {
    const response = await this.get("/topscorers");
    return response;
  }

  async getTopAssists() {
    const response = await this.get("/topassists");
    return response;
  }
}
