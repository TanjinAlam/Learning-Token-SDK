import { LT } from '../src/client';

describe('Client', () => {
    let lt: LT;

    /**
     * Initialize the client before all tests.
     */
    beforeAll(() => {
        lt = new LT('test');
    });

    /**
     * Test the validateSdkKeyForInstitution method.
     * This test checks if an SDK key for an institution can be validated.
     */
    it('should validate an SDK key for an institution', async () => {
        const institutionId = 1;
        const sdkKey = 'exampleSdkKey';
        const response = await lt.validateSdkKeyForInstitution(institutionId, sdkKey);

        // Ensure the response is a boolean (result of validation)
        expect(typeof response).toBe('boolean');
    });
});

