import express from "express";
import { UserModel } from '../models/Users.js';


const router = express.Router()

/* This API allows users to join the waitlist */
router.post('/joinWaitlist',  (req, res) => {

    /* Obtaining information from front-end */
    const { name, email, phoneNumber, isPodcaster, message } = req.body;

    /* Throw error if user does not fill out all of the fields */
    if (!name || !email || !phoneNumber ) {
        res.status(422).json({error: "Please complete all of the necessary fields."})
    } 

    /* Creats a new user object (individual that signs up) */
    const newUser = new UserModel({
        name,
        email, 
        phoneNumber,
        message,
        isPodcaster
        
    })
    
    console.log("hi");
    /* Saves new user into the database */
    newUser.save().then(result => {
        res.json({ newUser : result })
    })

    /* Throws error if there is an issue regarding the code */
    .catch( err => {
        console.log("Error in registration.")
    })
    console.log("hi1");
});

export { router as userRouter }