const express = require('express');
const path = require('path')
const userRouter = require('./routes/userRouter')
const app = express();
const port = process.env.PORT || 4000
const logger = require('./logger')



//creating a simple middleware function


app.use(logger)


//express-json
app.use(express.json())
app.use(express.urlencoded({extended:false}))

//set a static folder
app.use(express.static(path.join(__dirname,'public')))

//using router 
app.use('/api/users',userRouter)


app.listen(port, () => {
    console.log(`Server running on port ${port}`)
})