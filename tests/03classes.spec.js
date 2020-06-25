const server = require("../server");
const supertest = require('supertest');
const db = require('../api/dbModel')

let token;
beforeAll((done) => {
    supertest(server)
        .post('/api/instructors/login')
        .send({
            username: "lambda",
            password: "lambdaschool",
        })
        .end((err, res, req) => {
            token = res.body.token; // save the token!
            done();
        });
});


describe('GET /api/classes', () => {
    it('comes back with a 201 OK code', async () => {

        const response = await supertest(server).get('/api/classes')
        expect(response.status).toBe(200)
    })
})
describe('GET /api/classes/id', () => {
    it('comes back with a 201', async () => {
        await supertest(server).post('/api/instructors/2/classes')
            .send({
                id: 1,
                name: "M",
                type: "B",
                startTime: "6 PM",
                duration: "1 hr",
                intensityLevel: "Hard",
                location: "Ann Arbor, MI",
                attendees: 12,
                maxClassSize: 20
            }).set('Authorization', token)

        const response1 = await supertest(server).get(`/api/classes/1`);

        expect(response1.status).toBe(200)
    })
    beforeEach(async () => {
        await db.clearDatabase('classes')
    })
})

describe('PUT /api/classes/id', () => {
    it('comes back with a 200 with authorization', async () => {

        const response1 = await supertest(server).put(`/api/classes/1`).send({
            id: 7,
            name: "Max Muscles 33",
            type: "Body Builders333",
            startTime: "6 PM",
            duration: "1 hr",
            intensityLevel: "Hard",
            location: "Ann Arbor, MI",
            attendees: 12,
            maxClassSize: 20
        }).set('Authorization', token)


        expect(response1.status).toBe(200)
    })
})
describe('DELETE /api/classes/id', () => {
    it('comes back with a 200 to confirm delete with authorization', async () => {
        const response1 = await supertest(server).delete(`/api/classes/1`)
        .set('Authorization', token)
        expect(response1.status).toBe(200)
    })
})
