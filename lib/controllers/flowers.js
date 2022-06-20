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
  })
  
  .post('/', async (req, res, next) => {
    try { 
      const newFlower = await Flower.insert(req.body);
      res.json(newFlower);
    } catch (error) {
      next (error);
    }
  })
  
  .put('/:id', async (req, res, next) => {
    try {
      const updatedFlower = await Flower.updateById(req.params.id, req.body);
      res.json(updatedFlower);
    } catch (error) {
      next (error);
    }
  })

  .delete('/:id', async (req, res, next) => {
    try {
      const deletedFlower = await Flower.deleteById(req.params.id);
      res.json(deletedFlower);
    } catch (error) {
      next (error);
    }
  });
