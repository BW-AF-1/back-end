const db = require('../data/db.config');

module.exports = {
    getFromDB,
    addData,
    clearDatabase
}

//reusable get function to retreive data from all databases
function getFromDB(dbName) {
    return db(dbName)
}

//POST data to the database
function addData(text, object) {
    return db(text).insert(object)
}

function clearDatabase(text) {
    return db(text).truncate()
}