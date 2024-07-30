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
     * Test the getUser method.
     * This test checks if a user can be fetched by their ID.
     */
    it('should get a user by ID', async () => {
        const userId = 1;
        const response = await client.getUser(userId);

        // Ensure the response status is 200
        expect(response.status).toBe(200);

        // Ensure the response data contains the correct user ID
        expect(response.data).toHaveProperty('id', userId);
    });

    /**
     * Test the getUsers method.
     * This test checks if a list of users can be fetched.
     */
    it('should get a list of users', async () => {
        const response = await client.getUsers();

        // Ensure the response status is 200
        expect(response.status).toBe(200);

        // Ensure the response data is an array
        expect(response.data).toBeInstanceOf(Array);
    });
});
