const express = require('express');

const postController = require('../controllers/post');

const router = express.Router();

router.get('/posts/', postController.getPosts);

router.get('/posts/:postId', postController.getPost);

router.post('/posts/create', postController.createPost);

router.post('/posts/:postId/update', postController.updatePost);

router.delete('/posts/:postId/delete', postController.deletePost);

module.exports = router;