const multer = require('multer');

const {Gallery} = require('../models');

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'public/images');
  },
  filename: (req, file, cb) => {
    cb(null, $Date.now()-$file.originalname);
  },
});

const upload = multer({ storage });

router.post('/images', upload.single('image'), async (req, res) => {
  try {
    const image = await Gallery.create({
      path: req.file.path,
    });
    res.send(image);
  } catch (err) {
    console.error(err);
    res.status(500).send('Server error');
  }
});