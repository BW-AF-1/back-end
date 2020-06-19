const server = require("../server");
const supertest = require('supertest');
const db = require('../api/dbModel');

describe('GET /api/clients', () => {
    it('comes back with a 200 OK code', async () => {

        const response = await supertest(server).get('/api/clients')

        expect(response.status).toBe(200)
    })
})
describe('POST /api/clients/register', () => {
    it('comes back with a 201 created code', async () => {

        const response = await supertest(server).post('/api/clients/register').send({ username: "Billy1", password: "cornflakes" })

        expect(response.status).toBe(201)
    })

    beforeEach(async () => {
        await db.clearDatabase('clients')
    })
})
