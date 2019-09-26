'use strict';
var express = require('express');
var router = express.Router();

const {ObjectID} = require('mongodb');
const objID = ObjectID();

const {usersCollection} = require('./schemaModel.js');

router.route('/getprofile/:userId').get(async (req, res)=>{
    const {userId} = req.params;

    if(!ObjectID.isValid(userId)){
        res.status(200).send({"error":{
                "message":'This user not valid '+userId
        }}).end();     
    }

    await usersCollection.find({ _id: ObjectID(userId)}).then((userinfo)=>{
         //console.log(userinfo); 
         //console.log(userinfo.property);
         if(userinfo==0){
            res.status(200).send({"error":{
                "message":'Wrong user id '+userId
            }}).end(); 
         }else{
            res.status(200).send({"success":{
                "data":userinfo
            }}).end(); 
         }

    }).catch((error)=>{
        res.status(500).send({"error":{
                "data":error
        }}).end(); 
    });
});


router.route('/delete/:userID').delete(async (req, res)=>{

    const {userID} = req.params;
    usersCollection.deleteOne({'_id':ObjectID(userID)}, function (err, adventure) {
        if(err){
            return console.log(err);
        }

        res.status(200).send({"success":{
                "data":"Successful user delete"
        }}).end();
    });

});

router.route('/updateprofile').post(async (req, res)=>{

    let {first_name,last_name,email,password,phone} = req.body;
    res.status(200).send({
        "message":"Sign Up Successful",
        "user": first_name
    }).end();
    
});

module.exports = router;