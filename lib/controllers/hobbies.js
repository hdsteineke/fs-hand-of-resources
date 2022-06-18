const { Router } = require('express');
const Hobby = require('../models/Hobby');
module.exports = Router()

  .get('/', async (req, res, next) => {
    try {
      const hobbies = await Hobby.getAll();
      res.json(hobbies);
    } catch (error) {
      next (error);
    }
  })

  .get('/:id', async (req, res, next) => {
    try {
      const singleHobby = await Hobby.getById(req.params.id);
      res.json(singleHobby);
    } catch (error) {
      next (error);
    }
  })
  
  .post('/', async (req, res, next) => {
    try {
      const newHobby = await Hobby.insert(req.body);
      res.json(newHobby);
    } catch(error) {
      next(error);
    }
  })

  .put('/:id', async (req, res, next) => {
    try {
      const updatedHobby = await Hobby.updateById(req.params.id, req.body);
      res.json(updatedHobby);
    } catch (error) {
      next (error);
    }
  });
