require('dotenv').config();
const app = require("./index");
const supertest = require("supertest");

const request = supertest(app);

it('gets same message as in .env file', async () => {
    const response = await request.get('/');

    expect(response.status).toBe(200);
    expect(response.text).toBe(process.env.MESSAGE);
});