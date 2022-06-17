const { Router } = require('express');
const Snack = require('../models/Snack');
module.exports = Router()

  .get('/', async (req, res, next) => {
    try {
      const snacks = await Snack.getAll();
      res.json(snacks);
    } catch (error) {
      next (error);
    }
  })

  .get('/:id', async (req, res, next) => {
    try {
      const singleSnack = await Snack.getById(req.params.id);
      res.json(singleSnack);
    } catch (error) {
      next (error);
    }
  })

  .post('/', async (req, res, next) => {
    try {
      const newSnack = await Snack.insert(req.body);
      res.json(newSnack);
    } catch (error) {
      next (error);
    }
  });
