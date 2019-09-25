const {MongoClient,ObjectID} = require('mongodb');
const connectionURL = 'mongodb://127.0.0.1:27017'
const databaseName = "task-manager"

const objID = ObjectID();

MongoClient.connect(connectionURL,{},(error,client)=> {
	if(error){
		return console.log("Unable to connect db");
	}
	console.log("Connect database");

	//console.log(objID.getTimestamp());
	//console.log(objID.toHexString());
	const db = client.db(databaseName)
	/*
	db.collection('users').insertOne({
		name:'Jitendra Patel',
		email:'jitupatel7687@gmail.com',
		age:30,
		address:'Indore',
		zipcode:453771
	},(error,success)=>{
		if(error){
			return console.log(error);
		}
		console.log("success insert data");
	})*/

	//Change collection name
	/*db.collection('users').rename('user', {}, (error,result)=>{
		if(error){
			return console.log("error to change collection name");
		}
		console.log("change name successfully")
	})*/

	//Get user 
/*	const getCount = db.collection('user').find({name:'Jitendra Patel'}).count((error,count)=>{
	 	if(error){
	 		return console.log(error)
	 	}
	 	console.log(count)
	})*/

	//const getCount = db.collection('user').find({}).min(1);
	//console.log(getCount);

	/*const downPromise = new Promise((resolve,reject) => {
		resolve([1,2,3,4,5,6,7,8]);
		reject("Reject promise");
	})

	downPromise.then((result)=>{
		console.log(result);
	}).catch((error)=>{
		console.log(error);
	})
	*/

	/*const Updateuser = db.collection('user').updateOne({
		_id: new ObjectID('5d89a84bdf18fa8365d625f1')
	},{
		$set:{
			name:'Vinod Salitra',
			age:50
		}
	});
	*/
	/*Updateuser.then((result)=>{
		console.log("Update successfully");
	}).catch((error)=> {
		console.log(error);
	});*/


	//Delete functionality 
	/*const Updateuser = db.collection('user').deleteOne({
		_id: new ObjectID('5d89a84bdf18fa8365d625f1')
	});*/


	/*const pfunction = (callback) => {
		callback(undefined,[1,2,3,4,5,6,6,67]);
	}
	pfunction((error,success)=>{
		if(error){
			return console.log("error in code");
		}
		console.log(success);
	})*/

})
