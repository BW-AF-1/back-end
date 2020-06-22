const server = require("../server");
const supertest = require('supertest');
const db = require('../api/dbModel')

describe('GET /api/classes', () => {
    it('comes back with a 200 OK code', async () => {

        const response = await supertest(server).get('/api/classes')

        expect(response.status).toBe(200)
    })
})
describe('GET /api/classes/id', () => {
    it('comes back with a 200', async () => {
        await supertest(server).post('/api/instructors/register').send({ id: 4, username: "test1", password: "test1" })

        let id = 4;

         await supertest(server).post(`/api/instructors/${id}/classes`).send({
            id: 5,
            name: "Max Muscles 48",
            type: "Body Build",
            startTime: "4 PM",
            duration: "1 hr",
            intensityLevel: "Hard",
            location: "Ann Arbor, MI",
            attendees: 12,
            maxClassSize: 20
        })

        id = 5

        const response1 = await supertest(server).get(`/api/classes/${id}`).send({
            id: 5,
            name: "Max Muscles 1100",
            type: "Body Builders",
            startTime: "6 PM",
            duration: "1 hr",
            intensityLevel: "Hard",
            location: "Ann Arbor, MI",
            attendees: 12,
            maxClassSize: 20
        })  

        expect(response1.status).toBe(200)
    })
})

describe('PUT /api/classes/id', () => {
    it('comes back with a 200', async () => {

        let id = 5
 
        const response1 = await supertest(server).put(`/api/classes/${id}`).send({
            id: 7,
            name: "Max Muscles 33",
            type: "Body Builders333",
            startTime: "6 PM",
            duration: "1 hr",
            intensityLevel: "Hard",
            location: "Ann Arbor, MI",
            attendees: 12,
            maxClassSize: 20
        }) 

        expect(response1.status).toBe(200)
    })
})
describe('DELETE /api/classes/id', () => {
    it('comes back with a 200 to confirm delete', async () => {

        let id = 5;

        const response1 = await supertest(server).delete(`/api/classes/${id}`)

        expect(response1.status).toBe(200)
    })
})