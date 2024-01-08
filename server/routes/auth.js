const express = require('express');

const { signup, login } = require('../controllers/auth.js');

const router = express.Router();

router.post('/signup', signup);
router.post('/login', login);

module.exports = router;

// const express = require ('express');

// const { signup, login } = require('../controllers/auth.js/');

// const router = express.Router();

// //initialising my 2 different routes //
// //post route sending data from frontend to backend 
// router.post('/signup', signup);
// router.post('/login', login);


// module.exports = router;