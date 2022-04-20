const express = require("express");

const { createBlog, getAllBlog, deleteBlog,updateBlog,getSingleBlog } = require('../controllers/blog');

const routerBlog = express.Router();
routerBlog.post("/blogs", createBlog);
routerBlog.get('/blogs', getAllBlog);
routerBlog.get('/blogs/:blogId',getSingleBlog);

routerBlog.put('/blogs/:blogId', updateBlog);

routerBlog.delete('/blogs/:blogId', deleteBlog);

module.exports = routerBlog;