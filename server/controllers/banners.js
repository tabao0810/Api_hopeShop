const mongoose = require("mongoose");
const Banner = require('../models/banners');

class BannerController {
  createBanner(req, res) {
    const banner = new Banner({
      _id: mongoose.Types.ObjectId(),
      image: req.body.image,
    });
    return banner
      .save()
      .then(newBanner => {
        return res.status(201).json({
          success: true,
          message: "New cause created successfully",
          Banner: newBanner
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
  getAllBanner(req, res) {
    Banner.find()
      .select("_id image createdAt updatedAt")
      .then(allBanner => {
        return res.status(200).json({
          Banner: allBanner
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
  deleteBanner(req, res) {
    const id = req.params.bannerId;
    Banner.deleteOne({ _id: id })
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
module.exports = new BannerController();
