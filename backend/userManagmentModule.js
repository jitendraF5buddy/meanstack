// Use usersCollection 
const {usersCollection} = require('./schemaModel.js');

	addUser = (userinfo) => {
		 //console.log("succesfdsfsdf");
		var inserUser = new usersCollection({message:userinfo});
		inserUser.save(function (err) {
			if(err){
				console.log("error add to add user info");
			}
		  	return { title: "The Guards", author: "Ken Bruen" };
		  // saved!
		});
	}
	
	getUser = async (userId) => {

		await usersCollection.findById(userId,(error,result)=>{
			if(error){
				console.log(error);
			}
			return "Hello world"
		})
		
		
	}
	
	updateUser = (userId, UserData) => {
		console.log("Update user info ID",userId);
	}
	
	deleteUser  =(userId) => {
		console.log("Delete User ID",userId);
	}


module.exports.addUser = addUser;
module.exports.getUser = getUser;
module.exports.updateUser = updateUser;
module.exports.deleteUser = deleteUser;