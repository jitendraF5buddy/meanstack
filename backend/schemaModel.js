const mongoose = require("mongoose");
const Schema = mongoose.Schema;


//UserCollection 
const DataSchema = new Schema(
  {
    message: String
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
