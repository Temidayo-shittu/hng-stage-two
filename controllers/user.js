const User= require('../model/User')
const {StatusCodes}= require('http-status-codes')
const CustomError= require('../errors')

const createUser= async(req,res)=>{
    const user = await User.create(req.body)
    res.status(StatusCodes.CREATED).json({
        status: "success",
		message: "Succesfully created User Resource",
        data: user
    })
}

const getAllUsers= async(req,res)=>{
    const users = await User.find({})
    res.status(StatusCodes.OK).json({
        status: "success", 
        data: users, 
        count: users.length
    })
}

const getSingleUser = async(req,res)=>{
    const {user_id}= req.params
    const user = await User.findOne({_id:user_id})
    if(!user) throw new CustomError.NotFoundError(`User with the given ID: ${user_id} not found`)
    res.status(StatusCodes.OK).json({
        status: "success",
        data: user,
    })
}

const updateUser = async(req,res)=>{
    const { user_id }= req.params
    const user = await User.findOneAndUpdate({_id:user_id},req.body,{new:true,runValidators:true})
    if(!user) throw new CustomError.NotFoundError(`User with the given ID: ${user_id} not found`)
    res.status(StatusCodes.OK).json({
        status: "success",
        data: user,
    })
}

const deleteUser = async(req,res)=>{
    const {user_id}= req.params
    const user = await User.findOne({_id:user_id})
    if(!user) throw new CustomError.NotFoundError(`User with the given ID: ${user_id} not found`)
    await user.remove()
    res.status(StatusCodes.OK).json({
        status: "success",
        message:'User has been succesfully removed!!'
    })
}

module.exports= {
    createUser,
    getAllUsers,
    getSingleUser,
    updateUser,
    deleteUser
}