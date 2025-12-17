const Post = require("../models/Post");

// Get all posts
exports.getPosts = async (req, res) => {
  const posts = await Post.find().populate("author", "name email");
  res.json(posts);
};

// Create post (protected)
exports.createPost = async (req, res) => {
  const { title, content } = req.body;
  if (!title || !content) return res.status(400).json({ message: "All fields required" });

  const post = new Post({ title, content, author: req.user._id });
  const createdPost = await post.save();
  res.status(201).json(createdPost);
};

// Get single post
exports.getPostById = async (req, res) => {
  const post = await Post.findById(req.params.id).populate("author", "name email");
  if (post) res.json(post);
  else res.status(404).json({ message: "Post not found" });
};

// Update post (protected)
exports.updatePost = async (req, res) => {
  const post = await Post.findById(req.params.id);
  if (!post) return res.status(404).json({ message: "Post not found" });
  if (post.author.toString() !== req.user._id.toString()) return res.status(401).json({ message: "Not authorized" });

  post.title = req.body.title || post.title;
  post.content = req.body.content || post.content;
  const updatedPost = await post.save();
  res.json(updatedPost);
};

// Delete post (protected)
exports.deletePost = async (req, res) => {
  const post = await Post.findById(req.params.id);
  if (!post) return res.status(404).json({ message: "Post not found" });
  if (post.author.toString() !== req.user._id.toString()) return res.status(401).json({ message: "Not authorized" });

  await post.remove();
  res.json({ message: "Post removed" });
};
