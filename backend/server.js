const express = require("express");
const bodyParser = require("body-parser");
const message = require('./message.js');

//Database connection
const {MongoClient,ObjectID} = require('mongodb');
const mongoose = require('mongoose');
const connectionURL = 'mongodb://localhost:27017:27017/task-manager'
//const databaseName = "task-manager"

const objID = ObjectID();
let db = mongoose.connect(connectionURL,{useNewUrlParser: true});

const userManagmentModule = require('./userManagmentModule.js');

//userManagmentModule.addUser("Jitendra Patel");
var uinfo = userManagmentModule.getUser(ObjectID("5d8b6db2f33f8b823bdea5e3"));

console.log(uinfo);
//console.log(message.error("This is my error message has to show"));

//create express app
const app = express();

// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({extended:true}));

// parse requests of content-type - application/json
app.use(bodyParser.json())


//define a simple route 
app.get('/',(req,res) => {
	res.json({'message':'Welcome to Easy system'});
});

app.get('/login',(req,res)=>{
	res.json({'Login':'This is login system'});
});

app.get('/register',(req,res)=>{
	res.json({'Login':'This is login system'});
});

app.get('/forgot',(req,res)=>{
	res.json({'Login':'This is login system'});
});

app.get('/add-new-user',(req,res)=>{
	res.json({'Login':'New User Add'});
});


app.listen(3000,()=>{
	console.log("Server is listening on port 3000");
});