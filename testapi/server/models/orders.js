const { type } = require("express/lib/response");
const mongoose = require("mongoose");

mongoose.Promise = global.Promise;

const ordersSchema = new mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  fullName: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  phoneNumber: {
    type: String,
    required: true
  },
  city:{
    type:String
  },
  commune:{
    type:String
  },
  district:{
    type:String
  },
  address:{
      type: String,      
  },  
  
  carts:[

  ], 
  shipcod:{
      type:String,      
  },
  mess:{
    type:String,
    default:"Chờ xác nhận"
  },
  userId:{
    type:String
  }
  
},
{
  timestamps:true
  
}
);

module.exports = mongoose.model("Orders", ordersSchema);