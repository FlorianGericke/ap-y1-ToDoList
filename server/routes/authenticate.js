const express = require('express');

const authentification = require('./../controllers/authentification');

const router = express.Router();

router.post('/register',authentification.postRegistration);
router.post('/login',authentification.postLogin);
router.post('/logout',authentification.postLogout);

module.exports = router;