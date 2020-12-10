const express = require('express');

const {
  getFavorites,
  addFavorite,
  removeFavorite,
} = require('../../controllers/tournaments');

const router = express.Router();

router.get('/favorites', getFavorites);

router.post('/favorites', addFavorite);

router.delete('/favorites/:id', removeFavorite);

module.exports = router;
