const express = require('express');
const router = express.Router()
const {bookAppointment, editAppointment, deleteAppointment, getAllAppointments} = require('../controllers/appointments')
const verifyAdmin = require('../middleware/adminAuthentication')

router.route('/bookappointment').post(bookAppointment)
router.route('/editappointment/:appointmentId').patch(verifyAdmin,editAppointment).delete(verifyAdmin, deleteAppointment)
router.route('/getappointments').get(verifyAdmin,getAllAppointments)

module.exports = router;