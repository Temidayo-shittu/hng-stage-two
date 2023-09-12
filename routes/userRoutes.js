const express= require('express')
const router= express.Router()
const { createUser, getAllUsers, getSingleUser, getMyUser, updateUser, deleteUser }=  require('../controllers/user')

router.route('/').post(createUser)
router.route('/').get(getAllUsers)
router.route('/myUser').get(getMyUser)
router.route('/:id').get(getSingleUser)
router.route('/:id').patch(updateUser)
router.route('/:id').delete(deleteUser)

module.exports= router