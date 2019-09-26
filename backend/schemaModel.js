const mongoose = require("mongoose");
const Schema = mongoose.Schema;


//UserCollection 
const DataSchema = new Schema(
  {
    first_name:{
      type:String,
      required: true
    },
    last_name: String,
    email:{
      type:String,
      required: true,
      trim:true
    },
    phone:Number,
    password:String,
    message: String,

  },
  { timestamps: true }
);
var usersCollection = mongoose.model("Users", DataSchema);

//AddressCollection
const addressSchema = new Schema(
  {
    address: String,
    city: String,
    zipcode:Number,
    phonenumber:Number
  },
  { timestamps: true }
);
var addressCollection = mongoose.model("user_address", addressSchema);


const finalcollection = {
	usersCollection,
	addressCollection
}

module.exports = finalcollection;