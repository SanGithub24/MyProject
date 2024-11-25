const express = require('express');
const router = express.Router();
const { AddOffers } = require('../models');

const multer = require('multer');
const path = require('path');

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'assets'); // Ensure the 'assets' directory exists in your server's root directory
  },
  filename: (req, file, cb) => {
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
    cb(null, uniqueSuffix + path.extname(file.originalname));
  }
});

const upload = multer({ storage: storage }).single('offerimg');

// Add an offer
router.post('/', (req, res) => {
  upload(req, res, async (error) => {
    if (error) {
      console.log(error);
      return res.status(500).json({ error: 'Failed to upload file' });
    }

    try {
      const filename = req.file ? req.file.filename : null;
      const offer = {
        offerimg: filename,
        description: req.body.description,
      };
      
      const createdOffer = await AddOffers.create(offer);
      res.json(createdOffer);
    } catch (error) {
      console.log(error);
      res.status(500).json({ error: 'Failed to add offer' });
    }
  });
});

// Get all offers
router.get('/', async (req, res) => {
  try {
    const offers = await AddOffers.findAll();
    res.json(offers);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: 'Failed to fetch offers' });
  }
});

// Delete an offer
router.delete('/:id', async (req, res) => {
  try {
    const offerId = req.params.id;
    await AddOffers.destroy({ where: { id: offerId } });
    res.json({ message: 'Offer deleted successfully' });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: 'Failed to delete offer' });
  }
});

module.exports = router;
