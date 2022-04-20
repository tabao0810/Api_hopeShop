const mongoose = require("mongoose");

mongoose.Promise = global.Promise;

const blogSchema = new mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  image: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  text: {
    type: String,
    required: true
  },
  comments:[
    
  ]
  
},
{
    timestamps: true
});

module.exports = mongoose.model("Blog", blogSchema);