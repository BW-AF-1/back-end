const server = require("../../server");
const supertest = require('supertest');
const db = require('../dbModel');

describe('GET /api/classes', () => {
    it('comes back with a 200 OK code', async () => {

        const response = await supertest(server).get('/api/classes')

        expect(response.status).toBe(200)
    })
    it('Returns a list of classes', async () => {
        const response = await db.getFromDB('classes')

        expect(response).toBeTruthy()
    })
})
describe('POST /api/classes', () => {
    it('comes back with a 201 created code', async () => {

        const response = await supertest(server).post('/api/classes').send({ username: "Billy1", password: "cornflakes" })

        expect(response.status).toBe(201)
    })
    it('POST classes', async () => {
        const newClient = {
            id: 1,
            name: "Get Fit Quick",
            type: "Pump Me Up",
            startTime: "4 PM",
            duration: "2 hr",
            intensityLevel: "Easy",
            location: "Seattle, Wa",
            attendees: 11,
            maxClassSize: 20,
            instructor_id: 1
        }

        const response = await db.addData('classes', newClient)

        expect(response).toBeTruthy()
    })
})
beforeEach(async () => {
    await db.clearDatabase('classes')
})