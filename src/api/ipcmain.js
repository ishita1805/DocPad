const { ipcMain } = require('electron')
const database = require('./db')

ipcMain.on('asynchronous-message', (event, arg) => {
    const sql = arg
    database.all(sql, (err, rows) => {
        event.reply('asynchronous-reply', (err && err.message) || rows)
    })
})
