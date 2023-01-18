const path = require('path');

const express = require('express');

const postController = require('../controllers/post');

const router = express.Router();

router.get('/posts', postController.getPosts);

router.get('/posts/:postId', postController.getPost);

router.get('/posts/:postId/new', postController.newPost);

router.get('/posts/:postId/edit', postController.editPost);

router.post('/posts/:postId/update', postController.updatePost);

router.post('/posts/:postId/delete', postController.deletePost);


module.exports = router;