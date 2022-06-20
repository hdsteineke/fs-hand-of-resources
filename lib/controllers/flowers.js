const { Router } = require('express');
const Flower = require('../models/Flower');
module.exports = Router()

  .get('/', async (req, res, next) => {
    try {
      const flowerList = await Flower.getAllFlowers();
      res.json(flowerList);
    } catch (error) {
      next (error);
    }
  })
  
  .get('/:id', async (req, res, next) => {
    try {
      const singleFlower = await Flower.getFlowerById(req.params.id);
      res.json(singleFlower);
    } catch (error) {
      next (error);
    }
  });
