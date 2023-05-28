const express = require('express')
const UserController = require('../controllers/usercontroller')
const MassageController = require('../controllers/massagecontroller')
const router = express.Router()

// middleware that is specific to this router

// define the home page route

// define the about route
router.post('/login', UserController.login)
router.post('/register', UserController.register)

router.post('/gsign', UserController.gsign)

router.get('/massages', MassageController.allMassages)



module.exports = router