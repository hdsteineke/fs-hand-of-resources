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
  });
