const express = require("express");
const bodyParser = require("body-parser");


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