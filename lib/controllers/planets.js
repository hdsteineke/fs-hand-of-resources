const { Router } = require('express');
const Planet = require('../models/Planet');
module.exports = Router()

  .get('/', async (req, res, next) => {
    try {
      const planets = await Planet.getAllPlanets();
      res.json(planets);
    } catch (error) {
      next (error);
    }
  })

  .get('/:id', async (req, res, next) => {
    try {
      const singlePlanet = await Planet.getById(req.params.id);
      res.json(singlePlanet);
    } catch (error) {
      next (error);
    }
  })

  .post('/', async (req, res, next) => {
    try {
      const newPlanet = await Planet.insert(req.body);
      res.json(newPlanet);
    } catch (error) {
      next (error);
    }
  })
  
  .put('/:id', async (req, res, next) => {
    try {
      const updatedPlanet = await Planet.updateById(req.params.id, req.body);
      res.json(updatedPlanet);
    } catch (error) {
      next (error);
    }
  });

