const express = require('express');
const path = require('path')

const app = express();
const port = process.env.PORT || 4000
const logger = require('./logger')
//dummy data
const dummyUsers = require('./members')


//creating a simple middleware function


app.use(logger)



//express-json
app.use(express.json())

//set a static folder
app.use(express.static(path.join(__dirname,'public')))

//Home Page
app.get('/', (req, res) => {
    console.log(req.method);
    // res.send('<h1>Hello<h1>')
    res.sendFile(path.join(__dirname,'public','index.html'))
})

//About Page
app.get('/about', (req, res) => {
    console.log(req.method);
    // res.send('<h1>Hello<h1>')
    res.sendFile(path.join(__dirname,'public','about.html'))
})


//---------------------------------

//gets all users
app.get('/api/users', (req, res) => {
    res.json(dummyUsers)
})


//get single member
app.get('/api/users/:id', (req, res) => {
    const found = members.some(member => member.id === parseInt(req.params.id))
    //we will be using filter function to filter out the array
    if (found) {
        res.json(dummyUsers.filter(user => user.id === parseInt(req.params.id)))
    } else {
        res.send('User Not Found')
    }
})



app.listen(port, () => {
    console.log(`Server running on port ${port}`)
})