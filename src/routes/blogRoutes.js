const express = require("express");
const Blog = require("../models/blogModel");

const router = express.Router();

// Fetch Blogs
router.get("/blogs", (req, res) => {
  Blog.find({}, (err, blog) => {
    if (err) {
      res.send(err);
    } else {
      res.send(blog);
    }
  });
});

// Filter Blogs
router.get("/blogs/:blogTitle", (req, res) => {
  Blog.find({ title: req.params.blogTitle }, (err, blog) => {
    if (err) {
      res.send(err);
    } else {
      res.send(blog);
    }
  });
});

// Create Blogs
router.post("/blogs", (req, res) => {
  const title = req.body.title;
  const content = req.body.content;
  const image = req.body.image;
  const video = req.body.video;

  const blog = new Blog({
    title: title,
    content: content,
    image: image,
    video: video,
  });

  blog.save((err) => {
    if (err) {
      res.send(err);
    } else {
      res.send("blog added!");
    }
  });
});

// Delete Blogs
router.delete("/blogs", (req, res) => {
  const title = req.body.title;

  Blog.deleteOne({ title: title }, (err, blog) => {
    if (err) {
      res.send(err);
    } else {
      res.send("blog deleted!");
    }
  });
});

module.exports = router;
