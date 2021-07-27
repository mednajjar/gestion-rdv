const express = require('express')
const route = express()
const {createUser} = require('../controllers/adminController')

route.post('/users', createUser)

export default route;