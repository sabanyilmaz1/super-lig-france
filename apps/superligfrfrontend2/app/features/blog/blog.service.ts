import { Http } from "~/core/api/http";

export class BlogService extends Http {
  async getBlog() {
    const response = await this.get("/articles");
    return response;
  }
}
