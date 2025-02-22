import { Http } from "~/core/api/http";

export class ResultService extends Http {
  async getResultsByDateRange(startingDate: string, endingDate: string) {
    const response = await this.get(
      `/resultsByDateRange/${startingDate}/${endingDate}`
    );
    return response;
  }
}
