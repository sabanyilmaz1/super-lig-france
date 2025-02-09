import { fetchWithAuth } from "./fetch-auth";

interface RequestOptions extends RequestInit {
  params?: Record<string, string>;
  request: Request;
}

interface RequestOptionsWithoutAuth extends RequestInit {
  params?: Record<string, string>;
}

export class Http {
  private static readonly baseUrl: string = import.meta.env.VITE_BASE_URL;

  private async request<T>(
    endpoint: string,
    options: RequestOptions
  ): Promise<T> {
    const { params, request, ...requestOptions } = options;

    let url = `${Http.baseUrl}${endpoint}`;
    if (params) {
      const searchParams = new URLSearchParams(params);
      url += `?${searchParams.toString()}`;
    }

    const response = await fetchWithAuth(request, url, {
      ...requestOptions,
      headers: {
        "Content-Type": "application/json",
        ...options.headers,
      },
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    return response.json();
  }

  private async requestWithoutAuth<T>(
    endpoint: string,
    options: RequestOptionsWithoutAuth = {}
  ): Promise<T> {
    const { params, ...requestOptions } = options;

    let url = `${Http.baseUrl}${endpoint}`;
    if (params) {
      const searchParams = new URLSearchParams(params);
      url += `?${searchParams.toString()}`;
    }

    const response = await fetch(url, {
      ...requestOptions,
      headers: {
        "Content-Type": "application/json",
        ...options.headers,
      },
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    return response.json();
  }

  public async get<T>(endpoint: string, options: RequestOptions): Promise<T> {
    return this.request<T>(endpoint, {
      ...options,
      method: "GET",
    });
  }

  public async post<T>(
    endpoint: string,
    options: RequestOptions,
    data?: unknown
  ): Promise<T> {
    return this.request<T>(endpoint, {
      ...options,
      method: "POST",
      body: data ? JSON.stringify(data) : undefined,
    });
  }

  public async put<T>(
    endpoint: string,
    options: RequestOptions,
    data?: unknown
  ): Promise<T> {
    return this.request<T>(endpoint, {
      ...options,
      method: "PUT",
      body: data ? JSON.stringify(data) : undefined,
    });
  }

  public async postWithoutAuth<T>(
    endpoint: string,
    data?: unknown,
    options: RequestOptionsWithoutAuth = {}
  ): Promise<T> {
    return this.requestWithoutAuth<T>(endpoint, {
      ...options,
      method: "POST",
      body: data ? JSON.stringify(data) : undefined,
    });
  }
}
