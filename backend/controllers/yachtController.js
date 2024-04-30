const yachtController = require('express').Router();
const Yacht = require('../models/Yacht');
const verifyToken = require('../middlewares/verifyToken');

// GET ALL
yachtController.get('/getAll', async (req, res) => {
    try {
        const yachts = await Yacht.find({})
        return res.status(200).json(yachts)
    } catch (error) {
        console.error(error)        
    }
})

// FETCH MY YACHTS
yachtController.get('/find/my-yachts', verifyToken, async (req, res) => {
    try {
        const yachts = await Yacht.find({ currentOwner: req.user.id })
        return res.status(200).json(yachts)
    } catch (error) {
        console.error(error)        
    }
})

// FETCH BOOKMARKED YACHTS
yachtController.get('/find/bookmarked-yachts', verifyToken, async (req, res) => {
    try {
        const yachts = await Yacht.find({ bookmarkedUsers: { $in: req.user.id } })
        return res.status(200).json(yachts)
    } catch (error) {
        console.error(error)        
    }
})

// GET BY ID
yachtController.get('/find/:id', async (req, res) => {
    try {
        const yacht = await Yacht.findById(req.params.id).populate('currentOwner', '-password')
        if (!yacht) {
            throw new Error({ msg: 'Yacht not found' })
        } else {
            return res.status(200).json(yacht)
        }
    } catch (error) {
        return res.status(500).json(error)        
    }
})

// CREATE YACHT
yachtController.post('/', verifyToken, async (req, res) => {
    try {
        const newYacht = await Yacht.create({ ...req.body, currentOwner: req.user.id })
        return res.status(201).json(newYacht)
    } catch (error) {
        return res.status(500).json(error)        
    }
})

// UPDATE YACHT
yachtController.put('/:id', verifyToken, async (req, res) => {
    try {
        const yacht = await Yacht.findById(req.params.id)
        if (yacht.currentOwner.toString() !== req.user.id) {
            throw new Error({ msg: 'You are not authorized to update this yacht' })
        }
        const updatedYacht = await Yacht.findByIdAndUpdate(req.params.id, { $set: req.body }, { new: true })
        return res.status(200).json(updatedYacht)
    } catch (error) {
        return res.status(500).json(error)       
    }
})

// BOOKMARK/UNBOOKMARK YACHT
yachtController.put('/bookmark/:id', verifyToken, async (req, res) => {
    try {
        let yacht = await Yacht.findById(req.params.id)
        if (yacht.currentOwner.toString() === req.user.id) {
            throw new Error({ msg: 'You cannot bookmark your own yacht' })
        }
        if (yacht.bookmarkedUsers.includes(req.user.id)) {
            yacht.bookmarkedUsers = yacht.bookmarkedUsers.filter(id => id !== req.user.id)
            await yacht.save()
        } else {
            yacht.bookmarkedUsers.push(req.user.id)
            await yacht.save()
        }
        return res.status(200).json({ msg: 'Yacht bookmarked' })
    } catch (error) {
        return res.status(500).json(error)      
    }
})

// DELETE YACHT
yachtController.delete('/:id', verifyToken, async (req, res) => {
    try {
      const yacht = await Yacht.findById(req.params.id)
      if (yacht.currentOwner.toString() !== req.user.id) {
          throw new Error({ msg: 'You are not authorized to delete this yacht' })
      }
      await yacht.delete()
      return res.status(200).json({ msg: 'Yacht successfully deleted' })  
    } catch (error) {
        return res.status(500).json(error)       
    }
})

module.exports = yachtController
