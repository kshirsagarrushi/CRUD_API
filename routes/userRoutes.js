const express=require("express");
const router = express.Router();
const {registerUser,loginUser,currentUser}=require("../controllers/userController.js");

//register user
router.post("/register",registerUser);

//login user
router.post("/login",loginUser);

//current user information
router.post("/current",currentUser);

module.exports=router;