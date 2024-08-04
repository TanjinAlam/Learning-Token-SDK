import axios, { AxiosInstance } from "axios";
import { ApiResponse, ZoomTokenResponse } from "./types";

/**
 * @class
 * Client class for interacting with the API.
 */
export class LT {
  private httpClient: AxiosInstance;
  private baseURL: string;
  private apiKey: string;

  private zoomHttpClient: AxiosInstance;
  private zoomAccessToken: string | null = null;
  /**
   * Creates an instance of the Client.
   * @param {string} baseURL - The base URL of the API.
   */
  constructor(apiKey: string) {
    this.baseURL = "";
    this.apiKey = apiKey;
    this.httpClient = axios.create({
      baseURL: "",
      headers: { Authorization: `Bearer ${this.apiKey}` },
    });

    this.zoomHttpClient = axios.create({
      baseURL: "https://api.zoom.us/v2/",
    });
  }

  /**
   * Authenticates with the API and stores the access token for future requests.
   * @returns {Promise<ApiResponse<ZoomTokenResponse>>} Returns an instance of the Client.
   * @param {string} clientId - The clientId of the Zoom API.
   * @param {string} clientSecret - The clientSecret of the Zoom API.
   */
  async authenticateZoom(
    clientId: string,
    clientSecret: string
  ): Promise<ApiResponse<ZoomTokenResponse>> {
    const tokenUrl = "https://zoom.us/oauth/token";
    const authString = Buffer.from(`${clientId}:${clientSecret}`).toString(
      "base64"
    );

    const data = 'grant_type=client_credentials';

    try {
      const response = await axios.post<ZoomTokenResponse>(tokenUrl, data, {
        headers: {
          Authorization: `Basic ${authString}`,
          "Content-Type": "application/x-www-form-urlencoded",
        },
      });

      this.zoomAccessToken = response.data.access_token;

      return {
        data: response.data,
        status: response.status,
        statusText: response.statusText,
      };
    } catch (error: any) {
      throw new Error(error.response?.data?.message || error.message);
    }
  }
}
