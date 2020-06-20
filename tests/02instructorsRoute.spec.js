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
describe('POST /api/instructors/id', () => {
    it('comes back with a 200 created code', async () => {

        const id = 1;

        const response = await supertest(server).get(`/api/instructors/${id}`)

        expect(response.status).toBe(200)
    })
})
describe('DELETE /api/instructors/id', () => {
    it('comes back with a 200 created code', async () => {

        const id = 1;

        const response = await supertest(server).delete(`/api/instructors/${id}`)

        expect(response.status).toBe(200)
    })
})
describe('UPDATE /api/instructors/id', () => {
    it('comes back with a 200 ok code', async () => {

        await supertest(server).post('/api/instructors/register').send({ id: 1, username: "test", password: "test" })

        const id = 1;

        const response = await supertest(server).put(`/api/instructors/${id}`).send({username: 'George', password: 'Smith'})

        expect(response.status).toBe(200)
    })
})
//NOT WORKING
describe('GET /api/instructors/id/classes', () => {
    it('comes back with a 200 ok code', async () => {

        await supertest(server).post('/api/instructors/register').send({ id: 1, username: "test", password: "test" })

        const id = 1;

        const response = await supertest(server).get(`/api/instructors/${id}/classes`).send({
            id: 1,
            name: "Get Ripped 404",
            type: "Pump Me Up",
            startTime: "4 PM",
            duration: "1 hr",
            intensityLevel: "Hard",
            location: "Ann Arbor, MI",
            attendees: 12,
            maxClassSize: 20
        })

        expect(response.status).toBe(200)
    })
})