const express = require('express')
const serverConfig = require('./config/serverConfig')
const connectDB = require('./config/dbConfig')

const PORT = process.env.PORT

const app = express()
app.listen(serverConfig.PORT, async () =>{
    await connectDB();
    console.log(`Server started at port ${serverConfig.PORT}`);
    
}) 



// x7lm3lBn91fXn1CC
// raishreya1421