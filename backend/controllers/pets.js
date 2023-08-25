const { NotFoundError } = require('../errors');
const Pet = require('../models/Pet')

const {StatusCodes} = require('http-status-codes');
const Query = require('../models/Query');

const getAllPets = async(req,res)=>{
    const allPets = await Pet.find({});
    res.status(StatusCodes.OK).json({allPets})
}

const addNewPet = async(req,res)=>{
    
    const newPet = await Pet.create(req.body);
    res.status(StatusCodes.CREATED).json({pet: newPet})
}

const petQuery = async(req,res)=>{
    const petQueryForm = await Query.create(req.body);
    res.status(StatusCodes.CREATED).json({msg:'Your query has been submitted!'})
}
const getAllPetQueries = async(req,res)=>{
    const allPetQueries = await Query.find({});
    res.status(StatusCodes.OK).json({petQueries: allPetQueries});
}
const deletePetQuery = async(req,res)=>{
    const {queryId} = req.params;
    const deletedQuery = await Query.findByIdAndDelete({_id: queryId});
    if(deletedQuery){
        res.status(StatusCodes.OK).json({petQuery: deletedQuery,msg: 'Pet query deleted successfully'})
    }
    else
        throw new NotFoundError(`Pet Query with id: ${queryId} does not exist!`);
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
    getAllPets, addNewPet, petQuery, deletePet, getAllPetQueries,deletePetQuery
}

