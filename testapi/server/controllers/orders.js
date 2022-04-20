const mongoose = require('mongoose')
const Orders = require('../models/orders')

class OrdersController{
    createOrder(req,res){           
        const order = new Orders({
            _id: mongoose.Types.ObjectId(),
            fullName:req.body.fullName,
            email:req.body.email,
            phoneNumber:req.body.phoneNumber,
            city:req.body.city,
            commune:req.body.commune,
            district:req.body.district,
            address:req.body.address,
            shipcod:req.body.shipcod,
            carts:req.body.carts,
            mess:req.body.mess,
            userId:req.body.userId           
        });
        return order
        .save()
        .then(newOrder => {
            return res.status(201).json({
                success:true,
                Orders : newOrder
            })
        })
        .catch(error =>{
            res.status(500).json({
                success:false,
                error:error.message
            })
        })

    }
    getAllOrder(req,res){
        Orders.find()
        .select("_id fullName email phoneNumber city commune district address shipcod carts userId createdAt updatedAt mess")
        .then(allOrder => {
            return res.status(200).json({
                    Orders:allOrder
            })
        })
        .catch(error =>{
            res.status(500).json({
                success:false,
                error:error.message
            })
        })
    }
    updateOrder(req,res){
        const id = req.params.orderId;
        const order = req.body;
        Orders.updateOne({_id:id},{$set:order})
        .then(()=>
        res.status(204).json({
            success:true
        })
        )
        .catch(err=>
            res.status(500).json({
                success:false
            })
         );
    }
    
}
module.exports = new OrdersController();