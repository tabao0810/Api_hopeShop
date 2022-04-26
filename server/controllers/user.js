const mongoose = require('mongoose');
const User = require('../models/user');
const Product = require('../models/products');
const Orders = require('../models/orders')

class UserController{
    updateUser(req,res){
        const id = req.params.userId;
        const user = req.body;
        User.updateOne({_id:id},{$set:user})
        .then(()=>
        res.status(204).json({
            success:true
        })
        )
        .catch(error=>
            res.status(500).json({
                success:false
            })
            );
    }
    getAllUser(req,res){
        User.find()
        .select("_id firstName lastName email password")
        .then(allUser => {
            return res.status(200).json({
                User:allUser
            });
        })
        .catch(error =>{
            res.status(500).json({
                success:false,
                error:error.message
            })
        })
    }
    deleteUser(req, res) {
    const id = req.params.UserId;
        User.deleteOne({_id:id})  
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
    createOrder(req,res){
        const id = req.params.userId;
        User.findById(id)
        .then(listCart =>{
            res.status(200).json({
                Orders:listCart
            });
        })
    }

}
module.exports = new UserController()