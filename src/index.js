const express = require('express')
const serverConfig = require('./config/serverConfig')

const PORT = process.env.PORT

const app = express()
app.listen(PORT, () =>{
    console.log(`Server started at port ${serverConfig.PORT}`)
   
}) 