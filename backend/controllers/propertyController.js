const propertyController = require('express').Router()
const Property = require('../models/Property')
const verifyToken = require('../middlewares/verifyToken')

// GET ALL
propertyController.get('/getAll', async (req, res) => {
    try {
        const properties = await Property.find({}).populate('currentOwner', '-password')
        return res.status(200).json(properties)
    } catch (error) {
        console.error(error)
    }
})

// GET FEATURED
propertyController.get('/find/featured', async (req, res) => {
    try {
        const featuredProperties = await Property.find({ featured: true }).populate('currentOwner', '-password')
        return res.status(200).json(featuredProperties)
    } catch (error) {
        return res.status(500).json(error.message)
    }
})

// GET ALL FROM TYPE
propertyController.get('/find', async (req, res) => {
    const type = req.query
    let properties = []
    try {
        if (type) {
            properties = await Property.find(type).populate('owner', '-password')
        } else {
            properties = await Property.find({})
        }
        return res.status(200).json(properties)
    } catch (error) {
        return res.status(500).json(error.message)
    }
})

// TODO FETCH TYPE OF PROPERTIES. example: {BEACH: 34, MOUNTAIN: 23}
propertyController.get('/find/types', async (req, res) => {
    try {
        const beachType = await Property.countDocuments({ type: 'beach' })
        const mountainType = await Property.countDocuments({ type: 'mountain' })
        const villageType = await Property.countDocuments({ type: 'village' })

        return res.status(200).json({ beach: beachType, mountain: mountainType, village: villageType })
    } catch (error) {
        return res.status(500).json(error.message)
    }
})

// FETCH MY PROPERTIES
propertyController.get('/find/my-properties', verifyToken, async (req, res) => {
    try {
        const properties = await Property.find({ currentOwner: req.user.id })
        return res.status(200).json(properties)
    } catch (error) {
        console.error(error)
    }
})

// FETCH BOOKMARKED PROPERTIES
propertyController.get('/find/bookmarked-properties', verifyToken, async (req, res) => {
    try {
        const properties = await Property.find({ bookmarkedUsers: { $in: req.user.id } })
        return res.status(200).json(properties)
    } catch (error) {
        console.error(error)
    }
})

// TODO FETCH INDIVIDUAL PROPERTY
propertyController.get('/find/:id', async (req, res) => {
    try {
        const property = await Property.findById(req.params.id).populate('currentOwner', '-password')
        if (!property) {
            throw new Error({ msg: 'Property not found' })
        } else {
            return res.status(200).json(property)
        }
    } catch (error) {
        return res.status(500).json(error.message)
    }
})

// CREATE ESTATE
propertyController.post('/', verifyToken, async (req, res) => {
    try {
        const newProperty = await Property.create({ ...req.body, currentOwner: req.user.id })
        return res.status(201).json(newProperty)
    } catch (error) {
        return res.status(500).json(error.message)
    }
})

// UPDATE ESTATE
propertyController.put('/:id', verifyToken, async (req, res) => {
    try {
        const property = await Property.findById(req.params.id)
        if (property.currentOwner.toString() !== req.user.id) {
            throw new Error({ msg: 'You are not authorized to update this property' })
        }
        const updatedProperty = await Property.findByIdAndUpdate(req.params.id, { $set: req.body }, { new: true })
        return res.status(200).json(updatedProperty)
    } catch (error) {
        return res.status(500).json(error.message)
    }
})

// BOOKMARK/UNBOOKMARK ESTATE
propertyController.put('/bookmark/:id', verifyToken, async (req, res) => {
    try {
        let property = await Property.findById(req.params.id)
        if (property.currentOwner.toString() === req.user.id) {
            throw new Error({ msg: 'You cannot bookmark your own property' })
        }
        if (property.bookmarkedUsers.includes(req.user.id)) {
            property.bookmarkedUsers = property.bookmarkedUsers.filter(id => id !== req.user.id)
            await property.save()
        } else {
            property.bookmarkedUsers.push(req.user.id)
            await property.save()
        }
        return res.status(200).json({ msg: 'Property bookmarked' })
    } catch (error) {
        return res.status(500).json(error.message)
    }
})

// DELETE ESTATE
propertyController.delete('/:id', verifyToken, async (req, res) => {
    try {
        const property = await Property.findById(req.params.id)
        if (property.currentOwner.toString() !== req.user.id) {
            throw new Error({ msg: 'You are not authorized to delete this property' })
        }
        await property.delete()
        return res.status(200).json({ msg: 'Property successfully deleted' })
    } catch (error) {
        return res.status(500).json(error.message)
    }
})

module.exports = propertyController
