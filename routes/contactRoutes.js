const express=require("express");
const dotenv=require("dotenv").config();
const router =express.Router();
const {getContacts,createContact,getContact,updateContact,deleteContact} =require("../controllers/contactControllers.js");


//Route to get all contacts
router.route('/').get(getContacts);

//route to create contact
router.route('/').post(createContact);

//route to get particular contact with given id
router.route('/:id').get(getContact);

//route to update contact with given id
router.route('/:id').put(updateContact);

//route to delete contact with particular given id
router.route('/:id').delete(deleteContact);

module.exports=router;