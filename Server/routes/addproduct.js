const express = require('express');
const router = express.Router();
const multer = require('multer');
const path = require('path');

const { ProductDetails } = require('../models');

// Set up multer storage
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'assets'); // Ensure the 'assets' directory exists in your server's root directory
  },
  filename: (req, file, cb) => {
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
    cb(null, uniqueSuffix + path.extname(file.originalname));
  }
});

// Create multer upload instance
const upload = multer({ storage: storage });

router.post('/', upload.single('productimg'), async (req, res) => {
  const { pname, category, price, description } = req.body;
  const productimg = req.file.filename;

  try {
    // Validate the required fields
    if (!productimg || !pname || !category || !price || !description) {
      return res.status(400).json({ error: 'Missing required fields' });
    }

    await ProductDetails.create({
      productimg: productimg,
      pname: pname,
      category: category,
      price: price,
      description: description,
    });

    res.json('Product added successfully');
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

router.get('/', async (req, res) => {
  try {
    const detailsGet = await ProductDetails.findAll();
    res.json(detailsGet);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal server error' });
  }
});


router.delete('/:id', async (req, res) => {
  const { id } = req.params;

  try {
    const product = await ProductDetails.findByPk(id);
    if (!product) {
      return res.status(404).json({ error: 'Product not found' });
    }

    await product.destroy();

    res.json({ message: 'Product deleted successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

router.put('/:id', async (req, res) => {
  const { id } = req.params;
  const { productimg, pname, category, price, description } = req.body;

  try {
    const product = await ProductDetails.findByPk(id);
    if (!product) {
      return res.status(404).json({ error: 'Product not found' });
    }

    // Validate the required fields
    if (!productimg || !pname || !category || !price || !description) {
      return res.status(400).json({ error: 'Missing required fields' });
    }

    product.productimg = productimg;
    product.pname = pname;
    product.category = category;
    product.price = price;
    product.description = description;

    await product.save();

    res.json(product);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

module.exports = router;
