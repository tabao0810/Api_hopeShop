const express = require("express");

const { createBrand,getAllBrand,deleteBrand } = require('../controllers/brands');

const routerBrand = express.Router();
routerBrand.post("/brands/create", createBrand);
routerBrand.get('/brands', getAllBrand);
// routerBrand.get('/blogs/:blogId',getSingleBlog);

// routerBrand.put('/blogs/:blogId/update', updateBlog);

routerBrand.delete('/brands/:brandId', deleteBrand);

module.exports = routerBrand;