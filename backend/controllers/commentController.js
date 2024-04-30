const commentController = require('express').Router();
const Comment = require('../models/Comment');
const verifyToken = require('../middlewares/verifyToken');

// CREATE COMMENT
commentController.get('/:listingId', async (req, res) => {
    try {
        const comments = await Comment
            .find({ listing: req.params.listingId })
            .populate('author', '-password')

        return res.status(200).json(comments)
    } catch (error) {
        return res.status(500).json(error.message)        
    }
})

commentController.post('/', verifyToken, async (req, res) => {
    try {
        const createdComment = await (await Comment.create({ ...req.body, author: req.user.id }))
            .populate('author', '-password')
        return res.status(201).json(createdComment)        
    } catch (error) {
        return res.status(500).json(error.message)
    }
})

// DELETE COMMENT
commentController.delete('/:commentId', verifyToken, async (req, res) => {
    try {
        const comment = await Comment.findById(req.params.commentId)

        if (comment.author.toString() === req.user.id.toString()) {
            await Comment.findByIdAndDelete(req.params.commentId)
            return res.status(200).json({ msg: 'Comment successfully deleted' })
        } else {
            return res.status(403).json({ msg: 'You can only delete your own comments' })
        }
    } catch (error) {
        return res.status(500).json(error.message)
    }
})

module.exports = commentController
