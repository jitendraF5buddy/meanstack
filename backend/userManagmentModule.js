// Use usersCollection 
const {usersCollection} = require('./schemaModel.js');

const userManagment = {
	addUser : function(userinfo){
		 //console.log("succesfdsfsdf");
		var inserUser = new usersCollection({message:userinfo});
		inserUser.save(function (err) {
			if(err){
				console.log("error add to add user info");
			}
		  	console.log("Sucessfully created new user",userinfo);
		  // saved!
		});
	},
	getUser: function(userId){
		
		usersCollection.findById(userId).then((result)=>{
			return result;
		}).catch((error)=>{
			return error;
		})
	},
	updateUser : function(userId, UserData){
		console.log("Update user info ID",userId);
	},
	deleteUser : function(userId){
		console.log("Delete User ID",userId);
	}
}
module.exports = userManagment;