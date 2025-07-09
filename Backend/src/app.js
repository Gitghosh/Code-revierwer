// const express= require('express');
// const aiRoutes = require('./routes/ai.routes')//./ showing folders in same folder and ../ showing its folders folder and their neighbour folders.
// const app= express()//Express call creates a server, not starts the server so we are keeping it in app constant.//



// app.get('/',(req, res)=>{
//     res.send("Hello World")
// })//Created dummy route by '/' here to see server is running properly or not.//
// app.use('/ai', aiRoutes)//Request with /ai route goes to ai.routes

// module.exports= app//Exporing app to server.js//


const express= require('express');
const aiRoutes = require('./routes/ai.routes');
//const cors = require('cors')

const app = express()

//app.use(cors())

app.use(express.json())

app.get('/', (req, res) => {
    res.send('Hello World')
})

app.use('/ai', aiRoutes)


module.exports = app