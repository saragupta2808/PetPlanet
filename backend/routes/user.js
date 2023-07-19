const express = require('express')
const router = express.Router()

const {registerUser, completeProfile, getProfile} = require('../controllers/user');


router.route('/register').post(registerUser);
router.route('/profile/:userId').get(getProfile).patch(completeProfile)




module.exports = router;