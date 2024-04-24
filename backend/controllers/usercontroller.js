const userController = require('express').Router();
const User = require('../models/user');
const bcrypt = require('bcrypt');
const verifytoken = require('./middlewares/verifytoken');

userController.get('/find/:id', async (req, res) => {
    try {
        const user = await User.findById(req.params.id).select('-password')
        if (!user) throw new Error({ msg: 'User not found' })
        return res.status(200).json(user)
    } catch (error) {
        return res.status(500).json(error.message)
    }
})

userController.put('/:id', verifytoken, async (req, res) => {
    console.log(req.body)
    if (req.params.id === req.user.id.toString()) {
        try {
            if (req.body.password) {
                const newPassword = await bcrypt.hash(req.body.password, 10)
                req.body.password = newPassword
            }
            const updatedUser = await User.findByIdAndUpdate(req.params.id, { $set: req.body }, { new: true })

            return res.status(200).json(updatedUser)
        } catch (error) {
            return res.status(500).json(error.message)
        }
    } else {
        return res.status(403).json({ msg: 'You can only update your profile' })
    }
})

userController.delete('/:id', verifytoken, async (req, res) => {
    const user = await User.findById(req.params.id)
    if (!user) {
        return res.status(500).json({ msg: 'User not found' })
    }
    if (req.user.id.toString() === user._id.toString()) {
        try {
            await User.findByIdAndDelete(req.params.id)

            return res.status(200).json({ msg: 'User deleted' })
        } catch (error) {
            return res.status(500).json(error.message)
        }
    } else {
        return res.status(403).json({ msg: 'You can only delete your profile' })
    }
})

module.exports = userController
