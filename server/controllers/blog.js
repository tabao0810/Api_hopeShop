const mongoose = require("mongoose");
const Blog = require("../models/blog");

class BlogController{
 createBlog(req, res) {
   const blog = new Blog({
     _id: mongoose.Types.ObjectId(),
     image: req.body.image,
     description: req.body.description,
     text: req.body.text,  
   }); 
   return blog
     .save()
     .then(newBlog => {
       return res.status(201).json({
         success: true,
         message: "New cause created successfully",
         Blog: newBlog
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
 getAllBlog(req, res) {
  Blog.find()
    .select("_id image description text createdAt updatedAt comments")
    .then(allBlog => {
      return res.status(200).json({       
        Blog: allBlog
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
getSingleBlog(req, res) {
  const id = req.params.blogId;
  Blog.findById(id)
    .then(singleBlog => {
      res.status(200).json({        
        Blog: singleBlog
      });
    })
    .catch(err => {
      res.status(500).json({
        success: false,
        message: "This course does not exist",
        error: err.message
      });
    });
}
deleteBlog(req, res) {
  const id = req.params.blogId;
  Blog.deleteOne({_id:id})  
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
updateBlog(req, res){
  const id = req.params.blogId;
   const blog = req.body;
  Blog.updateOne({_id:id},{$set:blog})
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
module.exports = new BlogController();