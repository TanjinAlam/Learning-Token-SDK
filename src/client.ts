import axios, { AxiosInstance } from "axios";
import { ApiResponse, MeetupTokenResponse, ZoomTokenResponse } from "./types";
import { getEmails } from "./chat";
/**
 * @class
 * Client class for interacting with the API.
 */
export class LT {
  private httpClient: AxiosInstance;
  private baseURL: string;
  private apiKey: string;

  private zoomAccountId: string | null = null;
  private zoomClientId: string | null = null;
  private zoomClientSecret: string | null = null;
  private zoomHttpClient: AxiosInstance;
  private zoomAccessToken: string | null = null;

  private meetupGraphQLClient: any;
  private meetupAccessToken: string | null = null;
  /**
   * Creates an instance of the Client.
   * @param {string} baseURL - The base URL of the API.
   */
  constructor(
    apiKey: string,
    zoomAccountId: string,
    zoomClientId: string,
    zoomClientSecret: string
  ) {
    this.baseURL = "http://localhost:3000/api";
    this.apiKey = apiKey;
    this.httpClient = axios.create({
      baseURL: this.baseURL,
      headers: { secretKey: this.apiKey },
    });

    this.zoomHttpClient = axios.create({
      baseURL: "https://api.zoom.us/v2/",
    });

    this.zoomAccountId = zoomAccountId;
    this.zoomClientId = zoomClientId;
    this.zoomClientSecret = zoomClientSecret;
  }

  /**
   * Authenticates with the API and stores the access token for future requests.
   * @returns {Promise<ApiResponse<ZoomTokenResponse>>} Returns an instance of the Client.
   * @param {string} clientId - The clientId of the Zoom API.
   * @param {string} clientSecret - The clientSecret of the Zoom API.
   */
  async authenticateZoom(): Promise<ApiResponse<ZoomTokenResponse>> {
    const tokenUrl = `https://zoom.us/oauth/token?grant_type=account_credentials&account_id=${this.zoomAccountId}`;
    const authString = Buffer.from(
      `${this.zoomClientId}:${this.zoomClientSecret}`
    ).toString("base64");

    try {
      const response = await axios.post<ZoomTokenResponse>(tokenUrl, null, {
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

  async authenticateMeetup(
    clientId: string,
    clientSecret: string
  ): Promise<ApiResponse<MeetupTokenResponse>> {
    const tokenUrl = "https://secure.meetup.com/oauth2/access";

    const data = "grant_type=client_credentials";
    try {
      const response = await axios.post<MeetupTokenResponse>(tokenUrl, data, {
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
      });

      this.meetupAccessToken = response.data.access_token;
      this.meetupGraphQLClient.setHeader(
        "Authorization",
        `Bearer ${this.meetupAccessToken}`
      );

      return {
        data: response.data,
        status: response.status,
        statusText: response.statusText,
      };
    } catch (error: any) {
      throw new Error(error.response?.data?.message || error.message);
    }
  }

  /**
   * Pre event data save.
   * @param {string} eventId - The eventId of the Zoom Meeting.
   */
  async savePreEventData(eventId: string) {
    const data = {
      eventId,
      eventName: "HYPERLEDGER",
      eventType: "Primary",
      description: "string",
      eventDate: new Date(),
      speakerName: "Khairul Hasan",
      speakerEmail: "khairul.hasan.dev@gmail.com",
      speakerTitle: "Mantee",
      organization: "Learning Token",
    };
    const response = await this.httpClient.post("/preevent", data);
    return {
      data: response.data,
    };
  }

  /**
   * Post event data save.
   * @param {string} eventId - The eventId of the Zoom Meeting.
   */
  async savePostEventData(eventId: string) {
    const auth = await this.authenticateZoom();
    const emails = await getEmails(eventId, this.zoomAccessToken!);
    return emails;
  }
}
