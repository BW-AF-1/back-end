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
describe('POST /api/clients/:id', () => {
    it('comes back with a 200 created code', async () => {

        const id = 1;

        const response = await supertest(server).get(`/api/clients/${id}`)

        expect(response.status).toBe(200)
    })
})
describe('DELETE /api/clients/id', () => {
    it('comes back with a 200 created code', async () => {

        const id = 1;

        const response = await supertest(server).delete(`/api/clients/${id}`)

        expect(response.status).toBe(200)
    })
})
describe('UPDATE /api/clients/id', () => {
    it('comes back with a 200 ok code', async () => {

        await supertest(server).post('/api/clients/register').send({ id: 1, username: "test", password: "test" })

        const id = 1;

        const response = await supertest(server).put(`/api/clients/${id}`).send({ username: 'George', password: 'Smith' })

        expect(response.status).toBe(200)
    })
})

describe('GET /api/clients/id/classes', () => {
    it('comes back with a 200 ok code', async () => {

        await supertest(server).post('/api/clients/register').send({ id: 1, username: "test", password: "test" })

        const id = 1;

        const response = await supertest(server).get(`/api/clients/${id}/classes`).send({
            id: 1,
            name: "Get Ripped 404",
            type: "Pump Me Up",
            startTime: "4 PM",
            duration: "1 hr",
            intensityLevel: "Hard",
            location: "Ann Arbor, MI",
            attendees: 12,
            maxClassSize: 20,
        })

        expect(response.status).toBe(200)
    })
})
describe('GET api/clients/id/classes/classID', () => {
    it('comes back with a 200 ok code to assign classes to clients', async () => {
        await supertest(server).post('/api/clients/register').send({ id: 1, username: "test", password: "test" })
        
        const id = 1;
        
        await supertest(server).post(`/api/instructors/1/classes`).send({
            id: 3,
            name: " d",
            type: " Buiddld",
            startTime:"4 PM",
            duration: "1 hr",
            intensityLevel: "Hard",
            location: "Ann Arbor, MI",
            attendees: 12,
            maxClassSize: 20,
            instructor_id: 1
        })
        
        const classID = 3
        const response = await supertest(server).get(`/api/clients/${id}/classes/${classID}`)

        expect(response.status).toBe(200)
    })
    beforeEach(async () => {
        await db.clearDatabase('clients')
    })

})