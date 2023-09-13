const express= require('express')
const router= express.Router()
const { createUser, getAllUsers, getSingleUser,  updateUser, deleteUser }=  require('../controllers/user')

router.route('/').post(createUser)
router.route('/').get(getAllUsers)
router.route('/:user_id').get(getSingleUser) 
router.route('/:user_id').patch(updateUser)
router.route('/:user_id').delete(deleteUser)

module.exports= router
