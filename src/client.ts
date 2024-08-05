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
     * Async function to register an institution.
     * @param {LoginInstitutionBody} institution - The institution to register.
     * @returns {Promise<ApiResponse<RegisterInstitutionResponse>>} The response containing the registered institution data.
     * @author Weber Dubois
     */
    async registerInstitution(institution: RegisterInstitutionBody): Promise<ApiResponse<RegisterInstitutionResponse>> {
        const response = await this.httpClient.post(`/auth/institution-register`, institution);
        return response.data;
    }

    /**
     * Async function to login an institution.
     * @param {LoginInstitutionBody} login - The login details of the institution.
     * @returns {Promise<ApiResponse<LoginInstitutionResponse>>} The response containing the login details.
     * @author Weber Dubois
     */
    async loginInstitution(login: LoginInstitutionBody): Promise<ApiResponse<LoginInstitutionResponse>> {
        const response = await this.httpClient.post(`/auth/institution-login`, login);
        return response.data;
    }

    /**
     * Async function to generate an SDK key for an institution.
     * @param {number} institutionId - The ID of the institution.
     * @param {string} token - The token for authorization.
     * @returns {Promise<string>} The generated SDK key.
     * @author Weber Dubois
     */
    async generateSdkKeyForInstitution(institutionId: number, token: string): Promise<string> {
        const response = await this.httpClient.post(`/institutions/gen-sdk-keys/${institutionId}`, {}, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        });
        return response.data;
    }

    /**
     * Async function to delete an SDK key for an institution.
     * @param {number} institutionId - The ID of the institution.
     * @param {string} sdkKey - The SDK key to delete.
     * @param {string} token - The token for authorization.
     * @returns {Promise<string>} The result of the deletion operation.
     * @author Weber Dubois
     */
    async deleteSdkKeyForInstitution(institutionId: number, sdkKey: string, token: string): Promise<string> {
        const response = await this.httpClient.delete(`/institutions/sdk-keys/${institutionId}`, {
            headers: {
                Authorization: `Bearer ${token}`,
                'Content-Type': 'application/json'
            },
            data: { sdkKey }
        });
        return response.data;
    }

    /**
     * Async function to get all SDK keys for an institution.
     * @param {number} institutionId - The ID of the institution.
     * @param {string} token - The token for authorization.
     * @returns {Promise<string[]>} The array of SDK keys.
     * @author Weber Dubois
     */
    async getAllSdkKeysForInstitution(institutionId: number, token: string): Promise<string[]> {
        const response = await this.httpClient.get(`/institutions/all-sdk-keys/${institutionId}`, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        });
        return response.data;
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
