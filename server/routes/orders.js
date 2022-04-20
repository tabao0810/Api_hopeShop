const express = require("express");

const { createOrder, getAllOrder, updateOrder } = require('../controllers/orders');

const routerOrder = express.Router();
routerOrder.post("/order/create", createOrder);
routerOrder.get("/order/getOrder",getAllOrder)
routerOrder.put('/order/update/:orderId',updateOrder)

module.exports = routerOrder;