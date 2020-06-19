const server = require("../server");
const supertest = require('supertest');
const db = require('../api/dbModel')

describe('GET /api/classes', () => {
    it('comes back with a 200 OK code', async () => {

        const response = await supertest(server).get('/api/classes')

        expect(response.status).toBe(200)
    })
})
describe('POST /api/classes', () => {
    it('comes back with a 201 created code', async () => {

        const response = await supertest(server).post('/api/classes').send({ username: "Billy1", password: "cornflakes", teacher_id: 1})

        expect(response.status).toBe(201)
    })
    beforeEach(async () => {
        await db.clearDatabase('classes')
    })
})