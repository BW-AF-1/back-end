const server = require("./server");
const supertest = require('supertest');

describe('/ GET', () => {
    it('comes back with a 200 OK code', async() => {

        const response = await supertest(server).get('/')

        expect(response.status).toBe(200)
    })
    it('comes back with a json object for the index route', async () => {
        const expectedBody =  'The App is working' 

        const response = await supertest(server).get('/')

        expect(response.text).toEqual(expectedBody)
    })
}) 