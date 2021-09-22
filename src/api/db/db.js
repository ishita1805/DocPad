const sqlite3 = require('sqlite3')
const fs = require('fs')
const path = require('path')

const database = new sqlite3.Database('./public/db.sqlite3', (err) => {
    if (err) console.error('Database opening error: ', err)
})

let query = fs.readFileSync(path.join(__dirname, 'schema.sql'), 'utf8')
database.exec(query)

module.exports = database