const server = require("../server");
const supertest = require('supertest');
const db = require('../api/dbModel');

//TODO: CLEAN UP TEST
beforeAll((done) => {
    supertest(server)
        .post('/api/clients/register')
        .send({
            username: "bob",
            password: "test",
        })
        .end((err, res, req) => {
            done();
        });
    supertest(server)
        .post('/api/clients/login')
        .send({
            username: "bob",
            password: "test",
        })
        .end((err, res, req) => {
            token = res.body.token; // save the token!
            done();
        })
    supertest(server)
        .post('/api/clients/1/classes')
        .send({
            id: 1,
            name: "Get Ripped 404",
            type: "Pump Me Up",
            startTime: "4 PM",
            duration: "1 hr",
            intensityLevel: "Hard",
            location: "Ann Arbor, MI",
            attendees: 12,
            maxClassSize: 20,
            instructor_id: 1
        })
        .end((err, res, req) => {
            token = res.body.token; // save the token!
            done();
        })
});

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
describe('GET /api/clients/:id', () => {
    it('comes back with a 200 created code', async () => {

        const response = await supertest(server).get(`/api/clients/1`).set('Authorization', token)

        expect(response.status).toBe(200)
    })
})
describe('POST /api/clients/:id', () => {
    it('comes back with a 200 created code', async () => {

        const response = await supertest(server).get(`/api/clients/1`).set('Authorization', token)

        expect(response.status).toBe(200)
    })
})

describe('UPDATE /api/clients/id', () => {
    it('comes back with a 200 ok code', async () => {

        const response = await supertest(server).put(`/api/clients/1`).send({ username: 'George1', password: 'Smith1' }).set('Authorization', token)

        expect(response.status).toBe(200)
    })
})

describe('GET /api/clients/id/classes', () => {
    it('comes back with a 200 ok code', async () => {

        const response = await supertest(server).get(`/api/clients/1/classes`).send({
            name: "Get Ripped 404",
            type: "Pump Me Up",
            startTime: "4 PM",
            duration: "1 hr",
            intensityLevel: "Hard",
            location: "Ann Arbor, MI",
            attendees: 12,
            maxClassSize: 20,
        }).set('Authorization', token)

        expect(response.status).toBe(200)
    })
    beforeEach(async () => {
        await db.clearDatabase('classes')
    })
})
describe('GET api/clients/id/classes/classID', () => {
    it('comes back with a 201 create code to assign classes to clients', async () => {

        const data = await supertest(server).post(`/api/instructors/2/classes`).send({
            name: " d",
            type: " e",
            startTime:"4 e",
            duration: "1 hr",
            intensityLevel: "Hard",
            location: "Ann e, MI",
            attendees: 12,
            maxClassSize: 20,
        }).set('Authorization', token)

        const response = await supertest(server).get(`/api/clients/1/classes/1`).set('Authorization', token)

        expect(response.status).toBe(200)
    })
    beforeEach(async () => {
        await db.clearDatabase('classes')
    })

})
describe('DELETE /api/clients/id', () => {
    it('comes back with a 200 for deleted', async () => {

       await supertest(server).post('/api/clients/register').send({ id: 3,username: "test", password: "test" })

        const response = await supertest(server).delete(`/api/clients/3`).set('Authorization', token)

        expect(response.status).toBe(200)
    })
})