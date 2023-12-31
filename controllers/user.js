const User= require('../model/User')
const {StatusCodes}= require('http-status-codes')
const CustomError= require('../errors')

const createUser= async(req,res)=>{
    if(typeof req.body.name !== 'string') throw new CustomError.BadRequestError(`Please ensure user name is a string`)
    const user = await User.create(req.body)
    res.status(StatusCodes.CREATED).json({user})
}

const getSingleUser = async(req,res)=>{
    const {user_id}= req.params
    const user = await User.findOne({_id:user_id})
    if(!user) throw new CustomError.NotFoundError(`User with the given ID: ${user_id} not found`)
    res.status(StatusCodes.OK).json({user})
}

const updateUser = async(req,res)=>{
    const { user_id }= req.params
    const user = await User.findOne({_id:user_id})
    if(!user) throw new CustomError.NotFoundError(`User with the given ID: ${user_id} not found`)
    if(typeof req.body.name !== 'string') throw new CustomError.BadRequestError(`Please ensure user name is a string`)
    const update = await User.findOneAndUpdate({_id:user_id},req.body,{new:true,runValidators:true})
    res.status(StatusCodes.OK).json({update})
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
    getSingleUser,
    updateUser,
    deleteUser
}