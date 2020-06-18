const server = require("../../server");
const supertest = require('supertest');
const db = require('../dbModel');

describe('GET /api/instructors', () => {
    it('comes back with a 200 OK code', async () => {

        const response = await supertest(server).get('/api/instructors')

        expect(response.status).toBe(200)
    })
    it('Returns a list of instructors', async () => {
        const response = await db.getFromDB('instructors')

        expect(response).toBeTruthy()
    })
})
describe('POST /api/instructors/register', () => {
    it('comes back with a 201 created code', async () => {

        const response = await supertest(server).post('/api/instructors/register').send({ username: "Billy1", password: "cornflakes" })

        expect(response.status).toBe(201)
    })
    it('POST /register instructors', async () => {
        const newClient = { id: 1, username: "Mr. Bob", password: "cornflakes" }
        const response = await db.addData('instructors', newClient)

        expect(response).toBeTruthy()
    })
    beforeEach(async () => {
        await db.clearDatabase('instructors')
    })
})