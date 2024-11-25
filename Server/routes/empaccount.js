const express = require('express');
const router = express.Router();
const { EmpDetails } = require('../models');

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

const upload = multer({ storage: storage }).single('empimg');

// POST method to create a new employee
router.post('/', (req, res) => {
  upload(req, res, async (error) => {
    if (error) {
      console.log(error);
      return res.status(500).json({ error: 'Failed to upload file' });
    }

    try {
      const filename = req.file ? req.file.filename : null;
      const emp = {
        empimg: filename,
        empfullname: req.body.empfullname,
        empid: req.body.empid,
        bloodtype: req.body.bloodtype,
      };

      const createemp = await EmpDetails.create(emp);
      res.json(createemp);
    } catch (error) {
      console.log(error);
      res.status(500).json({ error: 'Failed to add employee' });
    }
  });
});

// GET method to retrieve all employees
router.get('/', async (req, res) => {
  try {
    const allEmps = await EmpDetails.findAll();
    res.json(allEmps);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// GET method to retrieve a specific employee by ID
router.get('/:id', async (req, res) => {
  const id = req.params.id;
  try {
    const emp = await EmpDetails.findByPk(id);
    if (!emp) {
      res.status(404).json({ error: 'Employee not found' });
    } else {
      res.json(emp);
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// PUT method to update an employee by ID
router.put('/:id', async (req, res) => {
  const id = req.params.id;
  try {
    const emp = await EmpDetails.findByPk(id);
    if (!emp) {
      res.status(404).json({ error: 'Employee not found' });
    } else {
      const filename = req.file ? req.file.filename : emp.empimg;
      const updatedEmp = {
        empimg: filename,
        empfullname: req.body.empfullname,
        empid: req.body.empid,
        bloodtype: req.body.bloodtype,
      };
      await emp.update(updatedEmp);
      res.json({ message: 'Employee updated successfully' });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// DELETE method to delete an employee by ID
router.delete('/:id', async (req, res) => {
  const id = req.params.id;
  try {
    const emp = await EmpDetails.findByPk(id);
    if (!emp) {
      res.status(404).json({ error: 'Employee not found' });
    } else {
      await emp.destroy();
      res.json({ message: 'Employee deleted successfully' });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

module.exports = router;
