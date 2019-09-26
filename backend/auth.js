'use strict';
var express = require('express');
var router = express.Router();

const {usersCollection} = require('./schemaModel.js');

router.route('/login').post(async (req, res)=>{

    let {email,password} = req.body;
    usersCollection.find({ email: email,password:password}).then((userinfo)=>{
         //console.log(userinfo); 
         //console.log(userinfo.property);
         if(userinfo==0){
            res.status(200).send({"error":{
                "message":'Wrong credintinal '+email
            }}).end(); 
         }else{
            res.status(200).send({"success":{
                "message":'Welcome back'
            }}).end(); 
         }

    }).catch((error)=>{
        console.log(error);
    });
});

router.route('/forgot').post(async (req, res)=>{
    let body = req.body;

    res.status(200).send({
            "message":"Check your email."
    }).end();
});

router.route('/signup').post(async (req, res)=>{

    let {first_name,last_name,email,password,phone} = req.body;

    await usersCollection.find({ email: email}).then((userinfo)=>{
         res.status(200).send({
            "error":{
                "message":'Email id already exists'
            }
           
            }).end();
    }).catch((error)=>{
        console.log(error);
    });

    var  inserUser = new usersCollection({first_name,last_name,email,password,phone});
    await inserUser.save(function(err){
        if(err){
            res.status(500).send({error: err.errors}).end();
        }
        res.status(200).send({
            "message":"Sign Up Successful",
            "user": first_name
            }).end();
    });
    
});

module.exports = router;