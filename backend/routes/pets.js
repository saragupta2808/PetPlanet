const express = require('express')
const router = express.Router();
const verifyAdmin = require('../middleware/adminAuthentication')
const {getAllPets, addNewPet, updatePet, deletePet} = require('../controllers/pets')

router.route('/').get(getAllPets).post(verifyAdmin,addNewPet)
router.route('/:petId').patch(verifyAdmin,updatePet).delete(verifyAdmin,deletePet)



module.exports = router