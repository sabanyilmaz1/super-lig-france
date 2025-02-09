import { Http } from "~/core/api/http";
import { storeAuthToken } from "~/core/api/fetch-auth";

interface LoginResponse {
  token: string;
}

interface LoginRequest {
  email: string;
  password: string;
}

export class UserAuthService extends Http {
  async login(credentials: LoginRequest): Promise<LoginResponse> {
    const response = await this.postWithoutAuth<LoginResponse>(
      "/login",
      credentials
    );
    storeAuthToken(response.token);
    return response;
  }
}
