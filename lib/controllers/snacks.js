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
  });
