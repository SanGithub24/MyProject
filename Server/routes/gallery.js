const express = require('express');
const router = express.Router();
const { Gallery } = require('../models');
const multer = require('multer');
const path = require('path');

// Set up multer storage for storing uploaded images
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, './assets');
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname));
  }
});

const upload = multer({ storage: storage });

router.post('/', upload.array('galleryimg', 12), async (req, res) => {
  try {
    const { filename } = req.files[0]; // Assuming you want to save the filename to the database
    const gallery = await Gallery.create({ galleryimg: filename });
    res.json(gallery);
  } catch (error) {
    console.log(error);
    res.status(500).send('Internal Server Error');
  }
});

router.get('/', async (req, res) => {
  try {
    const galleryImages = await Gallery.findAll();
    res.json(galleryImages);
  } catch (error) {
    console.log(error);
    res.status(500).send('Internal Server Error');
  }
});

router.delete('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const galleryImage = await Gallery.findByPk(id);

    if (!galleryImage) {
      return res.status(404).send('Image not found');
    }

    await galleryImage.destroy();
    res.send('Image deleted');
  } catch (error) {
    console.log(error);
    res.status(500).send('Internal Server Error');
  }
});

module.exports = router;
