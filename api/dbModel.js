const db = require('../data/db.config');

module.exports = {
    getFromDB,
    addData,
    clearDatabase,
    find,
    findByID,
    deleteByID,
    edit,
    getIdClasses,
    instructorPostClasses,
    editClasses
}

//reusable get function to retreive data from all databases
function getFromDB(dbName) {
    return db(dbName)
}

//POST data to the database
function addData(text, object) {
    return db(text).insert(object)
}

function find(name, object) {
    return db(name).where({ 'username': object }).first()
}
function findByID(name, id) {
    return db(name).where({ 'id': id }).first()
}
function deleteByID(name, id) {
    return db(name).where({ 'id': id }).del()
}
function edit(name, id, username, password) {
    const data = db(name).where({ 'id': id }).update({ 'username': username, 'password': password })
    return data
}

function getIdClasses(text, id) {
    if (text === 'instructors') {
        return db('instructors as i')
            .join("classes as c", 'i.id', `c.instructor_id`)
            .select('c.name', 'c.type', 'c.startTime', 'c.duration', 'c.intensityLevel', 'c.location', 'c.attendees', 'c.maxClassSize')
            .where('c.instructor_id', id)
    } else {
        return db('clients as c')
            .join("clients_classes as cc", 'c.id', 'cc.client_id')
            .join("classes as cl", "cc.class_id", "c.id")
            .select('cl.name', 'cl.type', 'cl.startTime', 'cl.duration', 'cl.intensityLevel', 'cl.location', 'cl.attendees', 'cl.maxClassSize')
            .where('c.id', id)
    }
}

//instructor can post classes that they teach
function instructorPostClasses(object, id) {
    object.instructor_id = id
    return db('classes').insert(object)
}

function editClasses(id, name, type, startTime, duration, intensityLevel, location, attendees, maxClassSize) {
    const data = db('classes').where({ 'id': id }).update({
        name,
        type,
        startTime,
        duration,
        intensityLevel,
        location,
        attendees,
        maxClassSize
    })
    return data
}

function clearDatabase(text) {
    return db(text).truncate()
}