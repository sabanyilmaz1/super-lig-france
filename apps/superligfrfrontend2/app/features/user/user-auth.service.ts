import { Http } from "~/core/api/http";
import { storeAuthToken } from "~/core/api/fetch-auth";
import { User } from "./user.domain";

interface LoginResponse {
  token: string;
}

interface LoginRequest {
  email: string;
  password: string;
}

interface RegisterRequest {
  email: string;
  password: string;
  username: string;
  team_favorite_api_id: number;
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

  async register(credentials: RegisterRequest): Promise<LoginResponse> {
    const response = await this.postWithoutAuth<LoginResponse>(
      "/register",
      credentials
    );
    storeAuthToken(response.token);
    return response;
  }

  async getMe(): Promise<User> {
    return this.get<User>("/me");
  }
}
