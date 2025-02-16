import { Http } from "~/core/api/http";

export class FixtureService extends Http {
  async getAllRounds() {
    const response = await this.get("/allRounds");
    return response;
  }

  async getLastFixtures(startingDate: string, endingDate: string) {
    const response = await this.get(
      `/fixturesByDateRange/${startingDate}/${endingDate}`
    );
    return response;
  }
}
