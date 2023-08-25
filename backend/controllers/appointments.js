const { NotFoundError } = require('../errors')
const Appointment = require('../models/Appointment')
const {StatusCodes} = require('http-status-codes')
const cloudinary = require('cloudinary').v2;
require("dotenv").config();


const bookAppointment = async(req,res,next)=>{
    let appointmentData;
    console.log('File url is', req.fileUrl);
    let petFile=[];
    if(req.fileUrl != null){
        console.log(req.file)
        const petFileURL = req.file.path; 
        const petFileName = req.file.filename;
        petFile = [petFileURL, petFileName];
    }   
    appointmentData = {...req.body, petFile};
    const appointment = await Appointment.create(appointmentData)
    res.status(StatusCodes.CREATED).json({appointment: appointment})
}


const getAllAppointments = async(req,res)=>{
    const appointments = await Appointment.find({}).sort('-createdAt')
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
    cloudinary.config({
        cloud_name: process.env.CLOUD_NAME,
        api_key: process.env.CLOUD_API_KEY,
        api_secret: process.env.CLOUD_API_SECRET,
    });
    const {params: {appointmentId}} = req;
    const appointment = await Appointment.findById({_id: appointmentId})
    // console.log('Pet array', appointment.petFile);
    // console.log('pet array length', appointment.petFile.length);
    
    if(appointment.petFile.length > 0){
        // console.log('deleting file from server')
        const fileName = appointment.petFile[1];
        const deleteFile = await cloudinary.uploader.destroy(fileName);
        console.log(deleteFile)
    }    
    const deleteAppointment = await Appointment.findByIdAndDelete({_id: appointmentId})
    if(!deleteAppointment){
        throw new NotFoundError(`Appointment with id: ${appointmentId} does not exist!`)
    }
    res.status(200).json({appointment: deleteAppointment})
}









module.exports={
    bookAppointment,getAllAppointments,editAppointment, deleteAppointment
}