const express = require('express')
const router = express.Router();
const verifyAdmin = require('../middleware/adminAuthentication')
const {getAllPets, addNewPet, deletePet, petQuery, getAllPetQueries, deletePetQuery} = require('../controllers/pets')

router.route('/').get(getAllPets).post(verifyAdmin,addNewPet)
router.route('/:petId').delete(verifyAdmin,deletePet)
router.route('/query').post(petQuery).get(verifyAdmin,getAllPetQueries)
router.route('/query/:queryId').delete(verifyAdmin, deletePetQuery)


module.exports = router