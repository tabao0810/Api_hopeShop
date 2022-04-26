const express = require("express");

const { createBanner,getAllBanner,deleteBanner } = require('../controllers/banners');

const routerBanner = express.Router();
routerBanner.post("/banners/create", createBanner);
routerBanner.get('/banners', getAllBanner);
// routerBanner.get('/blogs/:blogId',getSingleBlog);

// routerBanner.put('/blogs/:blogId/update', updateBlog);

routerBanner.delete('/banners/:bannerId', deleteBanner);

module.exports = routerBanner;