import { Client } from '../src/client';

describe('Client', () => {
    let client: Client;

    /**
     * Initialize the client before all tests.
     */
    beforeAll(() => {
        client = new Client('https://api.example.com');
    });

    /**
     * Test the registerInstitution method.
     * This test checks if an institution can be registered.
     */
    it('should register an institution', async () => {
        const institution = {
            id: 1,
            name: 'Example Institution',
            email: 'example@example.com',
            publicAddress: '123 Example St',
            password: 'password123',
            latitude: "40.7128",
            longitude: "-74.0060",
            type: 'institution'
        };
        const response = await client.registerInstitution(institution);

        // Ensure the response status is 200
        expect(response.status).toBe(200);

        // Ensure the response data contains the registered institution ID
        expect(response.data).toHaveProperty('id');
    });

    /**
     * Test the loginInstitution method.
     * This test checks if an institution can be logged in.
     */
    it('should login an institution', async () => {
        const login = {
            email: 'example@example.com',
            password: 'password123',
            type: 'institution'
        };
        const response = await client.loginInstitution(login);

        // Ensure the response status is 200
        expect(response.status).toBe(200);

        // Ensure the response data contains the login details
        expect(response.data).toHaveProperty('token');
    });

    /**
     * Test the generateSdkKeyForInstitution method.
     * This test checks if an SDK key can be generated for an institution.
     */
    it('should generate an SDK key for an institution', async () => {
        const institutionId = 1;
        const token = 'exampleToken';
        const response = await client.generateSdkKeyForInstitution(institutionId, token);

        // Ensure the response is a string (SDK key)
        expect(typeof response).toBe('string');
    });

    /**
     * Test the deleteSdkKeyForInstitution method.
     * This test checks if an SDK key can be deleted for an institution.
     */
    it('should delete an SDK key for an institution', async () => {
        const institutionId = 1;
        const sdkKey = 'exampleSdkKey';
        const token = 'exampleToken';
        const response = await client.deleteSdkKeyForInstitution(institutionId, sdkKey, token);

        // Ensure the response is a string (result of deletion operation)
        expect(typeof response).toBe('string');
    });

    /**
     * Test the getAllSdkKeysForInstitution method.
     * This test checks if all SDK keys for an institution can be retrieved.
     */
    it('should get all SDK keys for an institution', async () => {
        const institutionId = 1;
        const token = 'exampleToken';
        const response = await client.getAllSdkKeysForInstitution(institutionId, token);

        // Ensure the response data is an array of SDK keys
        expect(response).toBeInstanceOf(Array);
    });

    /**
     * Test the validateSdkKeyForInstitution method.
     * This test checks if an SDK key for an institution can be validated.
     */
    it('should validate an SDK key for an institution', async () => {
        const institutionId = 1;
        const sdkKey = 'exampleSdkKey';
        const token = 'exampleToken';
        const response = await client.validateSdkKeyForInstitution(institutionId, sdkKey, token);

        // Ensure the response is a boolean (result of validation)
        expect(typeof response).toBe('boolean');
    });
});
