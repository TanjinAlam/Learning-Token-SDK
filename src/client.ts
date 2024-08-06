import axios, { AxiosInstance } from 'axios';
import { ApiResponse, LoginInstitutionBody, LoginInstitutionResponse, RegisterInstitutionBody, RegisterInstitutionResponse, } from './types';

/**
 * @class
 * Client class for interacting with the API.
 */
export class Client {
    private httpClient: AxiosInstance;

    /**
     * Creates an instance of the Client.
     * @param {string} baseURL - The base URL of the API.
     */
    constructor(baseURL: string) {
        this.httpClient = axios.create({ baseURL: baseURL || process.env.BACKEND_API_URL });
    }

    /**
     * Async function to validate an SDK key for an institution.
     * @param {number} institutionId - The ID of the institution.
     * @param {string} sdkKey - The SDK key to validate.
     * @param {string} token - The token for authorization.
     * @returns {Promise<boolean>} The result of the validation.
     * @author Weber Dubois
     */
    async validateSdkKeyForInstitution(institutionId: number, sdkKey: string, token: string): Promise<boolean> {
        const response = await this.httpClient.post(`/institutions/validate-sdk-key/${institutionId}`, { sdkKey }, {
            headers: {
                Authorization: `Bearer ${token}`,
                'Content-Type': 'application/json'
            }
        });
        return response.data;
    }

}
