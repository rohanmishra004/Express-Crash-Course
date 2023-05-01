const express = require('express');
const router = express.Router();
const dummyUsers = require('../members')
const bcrypt = require('bcrypt')

//gets all users
router.get('/', (req, res) => {
    res.json(dummyUsers)
})


//get single member
router.get('/:id', (req, res) => {
    const found = dummyUsers.some(member => member.id === parseInt(req.params.id))
    //we will be using filter function to filter out the array
    if (found) {
        res.json(dummyUsers.filter(user => user.id === parseInt(req.params.id)))
    } else {
        res.status(400).send('User Not Found')
    }
})

//creating user
router.post('/', (req, res) => {
    const newUser = {
        id: Date.now().toString(),
        name: req.body.name,
        email: req.body.email,
        staatus:'active'
    }

    if (!newUser.name || !newUser.email) {
        res.status(400).json({msg:'Please include a name and email '})
    }
    dummyUsers.push(newUser)
    res.json(dummyUsers)
})


//updating member

module.exports = router
