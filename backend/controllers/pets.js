const { NotFoundError } = require('../errors');
const Pet = require('../models/Pet')
const {StatusCodes} = require('http-status-codes')

const getAllPets = async(req,res)=>{
    const allPets = await Pet.find({});
    res.status(StatusCodes.OK).json({allPets})
}

const addNewPet = async(req,res)=>{
    
    const newPet = await Pet.create(req.body);
    res.status(StatusCodes.CREATED).json({pet: newPet})
}

const updatePet = async(req,res)=>{

}

const deletePet = async(req,res)=>{
    const {petId} = req.params;
    const deletedPet = await Pet.findByIdAndDelete({_id: petId});
    if(deletedPet){
        res.status(StatusCodes.OK).json({msg: 'Pet successfuly deleted', deletedPet: deletedPet})
    }
    else{
        throw new NotFoundError(`Pet with id: ${petId} does not exist!`)
    }
}


module.exports={
    getAllPets, addNewPet, updatePet, deletePet
}

