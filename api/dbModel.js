const db = require('../data/db.config');

module.exports = {
    getFromDB,
    addData,
    clearDatabase,
    find
}

//reusable get function to retreive data from all databases
function getFromDB(dbName) {
    return db(dbName)
}

//POST data to the database
function addData(text, object) {
    return db(text).insert(object)
}

function find(name ,object)  {
    return db(name).where({ 'username': object }).first()
}


function clearDatabase(text) {
    return db(text).truncate()
}