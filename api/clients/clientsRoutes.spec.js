const server = require("../../server");
const supertest = require('supertest');
const db = require('../dbModel');

describe('GET /api/clients', () => {
    it('comes back with a 200 OK code', async () => {

        const response = await supertest(server).get('/api/clients')

        expect(response.status).toBe(200)
    })
    it('Returns a list of clients', async () => {
        const response = await db.getFromDB('clients')

        expect(response).toBeTruthy()
    })
})
describe('POST /api/clients/register', () => {
    it('comes back with a 201 created code', async () => {

        const response = await supertest(server).post('/api/clients/register').send({ username: "Billy1", password: "cornflakes" })

        expect(response.status).toBe(201)
    })
    it('POST /register client', async () => {
        const newClient = { id:1, username: "Billy1", password: "cornflakes" }
        const response = await db.addData('clients', newClient)

        expect(response).toBeTruthy()
    })
})
beforeEach(async () => {
    await db.clearDatabase('clients')
})