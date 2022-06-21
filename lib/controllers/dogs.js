const { Router } = require('express');
const Dog = require('../models/Dog');
module.exports = Router()

  .get('/', async (req, res, next) => {
    try {
      const dogsData = await Dog.getAll();
      res.json(dogsData);
    } 
    catch (error) {
      next (error);
    }
  })

  .get('/:id', async (req, res, next) => {
    try {
      const id = req.params.id;
      const matchingDog = await Dog.getById(id);
      res.json(matchingDog);
    } catch (error) {
      next (error);
    }
  })

  .post('/', async (req, res, next) => {
    try {
      const dog = await Dog.insert(req.body);
      res.json(dog);
    } catch (error) {
      next (error);
    }
  })
  
  .put('/:id', async (req, res, next) => {
    try {
      const dog = await Dog.updateById(req.params.id, req.body);
      res.json(dog);
    } catch (error) {
      next (error);
    }
  })


  .delete('/:id', async (req, res, next) => {
    try {
      const dog = await Dog.delete(req.params.id);
      res.json(dog);
    } catch (error) {
      next (error);
    }
  });

