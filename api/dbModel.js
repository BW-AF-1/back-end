const db = require('../data/db.config');

module.exports = {
    getFromDB
}

//reusable get function to retreive data from all databases
function getFromDB(dbName) {
    return db(dbName)
}