import axios, { AxiosInstance } from "axios";
import { ApiResponse, User } from "./types";
import "dotenv/config";
/**
 * @class
 * Client class for interacting with the API.
 */
export class LT {
  private httpClient: AxiosInstance;
  private baseURL: string;
  private apiKey: string;

  /**
   * Creates an instance of the Client.
   * @param {string} baseURL - The base URL of the API.
   */
  constructor(apiKey: string) {
    this.baseURL = process.env.API_URL || '';
    this.apiKey = apiKey;
    this.httpClient = axios.create({
      baseURL:  process.env.API_URL || '',
      headers: { Authorization: `Bearer ${apiKey}` },
    });
  }

  /**
   * Fetches a user by their ID.
   * @param {number} userId - The ID of the user.
   * @returns {Promise<ApiResponse<User>>} The response containing the user data.
   */
  async getUser(userId: number): Promise<ApiResponse<User>> {
    const response = await this.httpClient.get<User>(`/users/${userId}`);
    return {
      data: response.data,
      status: response.status,
      statusText: response.statusText,
    };
  }

  /**
   * Fetches a list of users.
   * @returns {Promise<ApiResponse<User[]>>} The response containing the list of users.
   */
  async getUsers(): Promise<ApiResponse<User[]>> {
    const response = await this.httpClient.get<User[]>("/users");
    return {
      data: response.data,
      status: response.status,
      statusText: response.statusText,
    };
  }
}
