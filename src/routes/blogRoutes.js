const express = require("express");
const Blog = require("../models/blogModel");

const router = express.Router();

// Fetch Blogs
router.get("/blogs", async (req, res) => {
  try {
    const blogs = await Blog.find({});
    res.send(blogs);
  } catch (err) {
    res.send(err);
  }
});

// Filter Blogs
router.get("/blogs/:title", async (req, res) => {
  try {
    const blogs = await Blog.find({ title: req.params.blogTitle });
    res.send(blogs);
  } catch (err) {
    res.send(err);
  }
});

// Create Blogs
router.post("/blogs", (req, res) => {
  const title = req.body.title;
  const content = req.body.content;
  const imageUri = req.body.imageUri;
  const videoUri = req.body.videoUri;

  const blog = new Blog({
    title: title,
    content: content,
    imageUri: imageUri,
    videoUri: videoUri,
  });

  blog
    .save()
    .then(() => {
      res.send("blog added!");
    })
    .catch((err) => {
      res.status(400).send(err);
    });
});

//Delete Blogs
router.delete("/blogs", (req, res) => {
  const title = req.body.title;
  Blog.deleteOne({ title: title })
    .then(() => {
      res.send("blog deleted!");
    })
    .catch((err) => {
      res.send(err);
    });
});

module.exports = router;
