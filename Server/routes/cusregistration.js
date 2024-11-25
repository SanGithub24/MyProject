const express = require('express');
const router = express.Router();
const { CusRegDetails } = require('../models');
const bcrypt = require('bcrypt');

router.post('/', async (req, res) => {
  const { name, email, password } = req.body;
  bcrypt.hash(password, 10).then((hash) => {
    CusRegDetails.create({
      name: name,
      email: email,
      password: hash,
    }).then(() => {
      res.json("Successfully Registered");
    });
  });
});

router.get('/', async (req, res) => {
  try {
    const detailsGet = await CusRegDetails.findAll();
    res.json(detailsGet);
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
});



router.post('/login', async (req, res) => {
  const { email, password } = req.body;
  try {
    const customer = await CusRegDetails.findOne({ where: { email: email } });

    if (!customer) {
      res.json({ success: false, message: 'User does not exist' });
    } else {
      const match = await bcrypt.compare(password, customer.password);
      if (!match) {
        res.json({ success: false, message: 'Wrong username or password' });
      } else {
        res.json({ success: true, message: 'Successfully logged in' });
      }
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({ success: false, message: 'Login failed' });
  }
});

router.get('/:id', async (req, res) => {
  const id = req.params.id;
  try {
    const user = await CusRegDetails.findByPk(id);
    if (!user) {
      res.status(404).json({ error: "User not found" });
    } else {
      res.json(user);
    }
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
});


module.exports = router;
