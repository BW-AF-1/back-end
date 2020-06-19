const server = require('../server');
const supertest = require('supertest');
const db = require('../api/dbModel');

describe('GET /api/instructors', () => {
    it('comes back with a 200 OK code', async () => {

        const response = await supertest(server).get('/api/instructors')

        expect(response.status).toBe(200)
    })
})
describe('POST /api/instructors/register', () => {
    it('comes back with a 201 created code', async () => {

        const response = await supertest(server).post('/api/instructors/register').send({ id: 1, username: "test", password: "test" })

        expect(response.status).toBe(201)
    })
        beforeEach(async () => {
        await db.clearDatabase('instructors')
    })
})
describe('POST /login route', () => {
    it('returns a 200 status code', async () => {

        await supertest(server).post('/api/instructors/register').send({ id: 1, username: "test", password: "test" })

        const res = await supertest(server)
            .post('/api/instructors/login').send({ username: 'test', password: 'test' })
        expect(res.status).toBe(200)
    })
    beforeEach(async () => {
        await db.clearDatabase('instructors')
    })
})