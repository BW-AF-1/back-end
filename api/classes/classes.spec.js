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