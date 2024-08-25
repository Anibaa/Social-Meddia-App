const express = require('express');
const router = express.Router();
const postController = require('../controllers/postController');

router.get('/posts', postController.getAllPosts);
router.post('/posts', postController.createPost);
router.put('/posts/:id/like', postController.likePost);
router.put('/posts/:id/comment', postController.addComment);

module.exports = router;
