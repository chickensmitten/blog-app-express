const path = require('path');

const express = require('express');

const postController = require('../controllers/post');

const router = express.Router();

router.get('/posts', postController.getPosts);

router.get('/posts/:postId', postController.getPost);

router.post('/posts/:postId/create', postController.create);

router.post('/posts/:postId/update', postController.updatePost);

router.post('/posts/:postId/delete', postController.deletePost);

module.exports = router;