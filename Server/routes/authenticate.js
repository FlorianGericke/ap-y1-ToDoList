const express = require('express');
const authentication = require('./../controllers/authentification');
const router = express.Router();

router.post('/register', authentication.postRegistration);
router.post('/login', authentication.postLogin);
router.post('/logout', authentication.postLogout);

module.exports = router;
