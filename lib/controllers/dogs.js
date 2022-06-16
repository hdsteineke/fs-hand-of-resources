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
  });

