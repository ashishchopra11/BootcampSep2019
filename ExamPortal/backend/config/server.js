const express = require('express')
const bodyParser = require('body-parser')
const { PORT, HOST,SECRET } =require('./config')
const mongooseConnection = require('../db').connection;
<<<<<<< HEAD
const router = require('../routers/route')
=======
const router = require('../router/router')
>>>>>>> eb590901e256ac9d957c06629c5bf3132d14f65d
const cors = require('cors')

const app = express()

app.use(bodyParser.urlencoded({
    extended: true
}))

app.use(bodyParser.json())
app.use(cors())
app.options("*",cors())

<<<<<<< HEAD
=======

>>>>>>> eb590901e256ac9d957c06629c5bf3132d14f65d
app.use(router())
app.listen(PORT,HOST, err=>{
    if(err) throw err;
    console.log(`Running on http:${HOST}:${PORT}`)
})

module.exports = {
    app
}
