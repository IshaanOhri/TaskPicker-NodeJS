const express = require('express')
require('./db/database')
const routes = require('./routes/routes')

const port = process.env.PORT

const app = express()

app.use(express.json())
// app.use(routes)

app.get('/',(req,res) => {
    res.send('Welcome to Task Picker')
})

app.listen(port,()=>{
    console.log('Active at port',port)
})