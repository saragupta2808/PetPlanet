const { NotFoundError } = require('../errors')
const Appointment = require('../models/Appointment')
const {StatusCodes} = require('http-status-codes')
const bookAppointment = async(req,res)=>{

    const appointment = await Appointment.create(req.body)
    res.status(StatusCodes.CREATED).json({appointment: appointment})
}


const getAllAppointments = async(req,res)=>{
    const appointments = await Appointment.find({})
    res.status(StatusCodes.OK).json({appointments: appointments})
}

const editAppointment = async(req,res)=>{
    const {params: {appointmentId}} = req;
    // console.log(req.body)
    // const {isCompleted}=req.body;
    const updatedAppointment = await Appointment.findByIdAndUpdate({_id: appointmentId}, req.body, {new: true})
    if(!updatedAppointment){
        throw new NotFoundError(`Appointment with id: ${appointmentId} does not exist!`)
    }
    res.status(StatusCodes.OK).json({updatedAppointment})
}

const deleteAppointment = async(req,res)=>{
    const {params: {appointmentId}} = req;
    const deleteAppointment = await Appointment.findByIdAndDelete({_id: appointmentId})
    if(!deleteAppointment){
        throw new NotFoundError(`Appointment with id: ${appointmentId} does not exist!`)
    }
    res.status(200).json({appointment: deleteAppointment})
}
module.exports={
    bookAppointment,getAllAppointments,editAppointment, deleteAppointment
}