const express = require('express')
const router = express.Router()


const {AddCategory} = require('../models');

router.get("/", async (req, res) => {
    const detailsGet = await AddCategory.findAll()
    res.json(detailsGet);
    
});

router.post("/", async (req, res) => {
    const cat = req.body;
    await AddCategory.create(cat);
    res.json(cat)
   
});
//get cattagroy
router.get("/", async (req, res) => {
    try {
      const categories = await AddCategory.findAll();
      res.json(categories);
    } catch (error) {
      res.status(500).json({ error: "Internal server error" });
    }
  });
  
  router.delete("/:id", async (req, res) => {
    const { id } = req.params;
    try {
      await AddCategory.destroy({ where: { id } });
      res.sendStatus(200);
    } catch (error) {
      res.status(500).json({ error: "Internal server error" });
    }
  });

module.exports = router;