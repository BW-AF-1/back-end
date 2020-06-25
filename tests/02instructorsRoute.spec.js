const server = require('../server');
const supertest = require('supertest');
const db = require('../api/dbModel');

let token;
beforeAll((done) => {
    supertest(server)
        .post('/api/instructors/register')
        .send({
            username: "lambda",
            password: "lambdaschool",
        })
        .end((err, res, req) => {
            done();
        });
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

describe('GET /api/instructors', () => {
    it('comes back with a 200 OK code and authorized', async () => {

        const response = await supertest(server).get('/api/instructors').set('Authorization', `${token}`)

        expect(response.status).toBe(200)
    })
})
describe('POST /api/instructors/register', () => {
    it('comes back with a 201 created code', async () => {

        const response = await supertest(server).post('/api/instructors/register').send({ id: 1, username: "test", password: "test" })

        expect(response.status).toBe(201)
    })
})
describe('POST /login route', () => {
    it('returns a 200 status code', async () => {

        await supertest(server).post('/api/instructors/register').send({ id: 1, username: "test", password: "test" })

        const res = await supertest(server)
            .post('/api/instructors/login').send({ username: 'test', password: 'test' })
        expect(res.status).toBe(200)
    })
})
describe('POST /api/instructors/id', () => {
    it('comes back with a 200 created code  and authenticated', async () => {

        const id = 1;

        const response = await supertest(server).get(`/api/instructors/${id}`).set('Authorization', `${token}`)

        expect(response.status).toBe(200)
    })
})
describe('DELETE /api/instructors/id', () => {
    it('comes back with a 200 created code and authenticated', async () => {

        const id = 1;

        const response = await supertest(server).delete(`/api/instructors/${id}`).set('Authorization', `${token}`)

        expect(response.status).toBe(200)
    })
})
describe('UPDATE /api/instructors/id', () => {
    it('comes back with a 200 ok code', async () => {
        const response = await supertest(server).put(`/api/instructors/2`).send({ username: 'George', password: 'Smith' }).set('Authorization', `${token}`)

        expect(response.status).toBe(200)
    })
})
describe('GET /api/instructors/id/classes', () => {
    it('comes back with a 200 when authorizes', async () => {

        const response = await supertest(server).get('/api/instructors/2/classes').send({
            id: 1,
            name: "Get Ripped 404",
            type: "Pump Me Up",
            startTime: "4 PM",
            duration: "1 hr",
            intensityLevel: "Hard",
            location: "Ann Arbor, MI",
            attendees: 12,
            maxClassSize: 20
        }).set('Authorization', `${token}`)

        expect(response.status).toBe(200)
    })
})
//Instructors can post classes
describe('POST /api/instructors/id/classes', () => {
    it('comes back with a 200 when authorized', async () => {

        const response = await supertest(server).post(`/api/instructors/2/classes`).send({
            name: "test",
            type: "test",
            startTime: "6 PM",
            duration: "1 hr",
            intensityLevel: "Hard",
            location: "Ann Arbor, MI",
            attendees: 12,
            maxClassSize: 20
        }).set('Authorization', `${token}`)

        expect(response.status).toBe(200)
    })
            beforeEach(async () => {
              await db.clearDatabase('classes')
    })
})