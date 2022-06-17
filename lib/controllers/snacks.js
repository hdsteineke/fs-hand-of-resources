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
  })

  .delete('/:id', async (req, res, next) => {
    try { 
      const deletedSnack = await Snack.delete(req.params.id);
      res.json(deletedSnack);
    } catch (error) {
      next (error);
    }
  })

  .put('/:id', async (req, res, next) => {
    try {
      const updatedSnack = await Snack.updateById(req.params.id, req.body);
      console.log('updatedSnack', updatedSnack);
      res.json(updatedSnack);
    } catch (error) {
      next (error);
    }
  });
