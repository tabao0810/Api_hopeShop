const mongoose = require("mongoose");
const Brand = require('../models/brands');

class BrandController{
    createBrand(req, res) {
   const brand = new Brand({
     _id: mongoose.Types.ObjectId(),
     image: req.body.image,     
   }); 
   return brand
     .save()
     .then(newBrand => {
       return res.status(201).json({
         success: true,
         message: "New cause created successfully",
         Brand: newBrand
       });
     })
     .catch(error => {
       console.log(error);
       res.status(500).json({
         success: false,
         message: "Server error. Please try again.",
         error: error.message
       });
     });
 }
 getAllBrand(req, res) {
  Brand.find()
    .select("_id image createdAt updatedAt")
    .then(allBrand => {
      return res.status(200).json({       
        Brand: allBrand
      });
    })
    .catch(err => {
      res.status(500).json({
        success: false,
        message: "Server error. Please try again.",
        error: err.message
      });
    });
}
deleteBrand(req, res) {
  const id = req.params.brandId;
  Brand.deleteOne({_id:id})  
    .then(() =>
      res.status(204).json({
        success: true
      })
    )
    .catch(err =>
      res.status(500).json({
        success: false
      })
    );
}
}
module.exports = new BrandController();
