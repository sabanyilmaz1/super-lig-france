import { Http } from "~/core/api/http";

export class FixtureService extends Http {
  async getLastFixture() {
    const response = await this.get("/lastFixture");
    return response;
  }
}
