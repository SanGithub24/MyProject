const express = require('express');
const router = express.Router();
const { AdminpannelReg } = require('../models');
const bcrypt = require('bcrypt');

router.post('/', async (req, res) => {
  const { name, email, password } = req.body;
  bcrypt.hash(password, 10).then((hash) => {
    AdminpannelReg.create({
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
    const detailsGet = await AdminpannelReg.findAll();
    res.json(detailsGet);
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
});

router.get('/:id', async (req, res) => {
  const id = req.params.id;
  try {
    const user = await AdminpannelReg.findByPk(id);
    if (!user) {
      res.status(404).json({ error: "User not found" });
    } else {
      res.json(user);
    }
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
});

router.put('/:id', async (req, res) => {
  const id = req.params.id;
  const { name, email, password } = req.body;
  try {
    const user = await AdminpannelReg.findByPk(id);
    if (!user) {
      res.status(404).json({ error: "User not found" });
    } else {
      bcrypt.hash(password, 10).then((hash) => {
        user.name = name;
        user.email = email;
        user.password = hash;
        user.save().then(() => {
          res.json("User updated successfully");
        });
      });
    }
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
});

router.delete('/:id', async (req, res) => {
  const id = req.params.id;
  try {
    const user = await AdminpannelReg.findByPk(id);
    if (!user) {
      res.status(404).json({ error: "User not found" });
    } else {
      user.destroy().then(() => {
        res.json("User deleted successfully");
      });
    }
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
});

router.post('/adlogin', async (req, res) => {
  const { email, password } = req.body;
  try {
    const admin = await AdminpannelReg.findOne({ where: { email: email } });
    if (!admin) {
      res.status(400).json({ success: false, message: "User Doesn't Exist" });
    } else {
      bcrypt.compare(password, admin.password).then((match) => {
        if (!match) {
          res.status(400).json({ success: false, message: "Wrong Username or Password" });
        } else {
          res.json({ success: true, message: "Successfully Logged In" });
        }
      });
    }
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
});

module.exports = router;
