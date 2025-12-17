const express = require("express");
const router = express.Router();
const { protect } = require("../middleware/authMiddleware");
const {
  getPosts,
  createPost,
  getPostById,
  updatePost,
  deletePost,
} = require("../controllers/postController");

router.route("/").get(getPosts).post(protect, createPost);
router.route("/:id").get(getPostById).put(protect, updatePost).delete(protect, deletePost);

module.exports = router;
