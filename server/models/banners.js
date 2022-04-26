const mongoose = require("mongoose");

mongoose.Promise = global.Promise;

const bannerSchema = new mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  image: {
    type: String,
    required: true
  },  
},
{
    timestamps: true
});

module.exports = mongoose.model("Banner", bannerSchema);