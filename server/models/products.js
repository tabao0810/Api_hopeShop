const { type } = require("express/lib/response");
const mongoose = require("mongoose");

mongoose.Promise = global.Promise;

const productSchema = new mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  image: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  name: {
    type: String,
    required: true
  },
  price:{
      type: Number,      
  },  
  quantity:{
    type:Number
  },  
  isSale:{
      type:Boolean,      
  },
  sale:{
      type: Number,
      default:0
  },
  typeProduct:{
    type:String,
  },
  sizesClothing:[
               
  ],
  sizeClothing:{
    type:String,    
  },
  sizesShoe:[

  ],
  sizeShoe:{
    type:String 
  },
  colors:[

  ],
  color:{
    type:String
  },
  amount:{
    type:Number,
    default:1
  }
  
},
);

module.exports = mongoose.model("Product", productSchema);