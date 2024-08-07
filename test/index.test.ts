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
