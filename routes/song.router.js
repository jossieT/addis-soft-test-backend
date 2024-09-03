const express = require('express');
const validate = require('../middlewares/validate');
const { postSong, getSong, editSong, removeSong } = require('../controller/song.controller');
const { createSongSchema } = require('../validations/song.validation');
const router = express.Router();

router.post('/song', validate(createSongSchema), postSong);
router.get('/songs', getSong);
router.patch('/song/:id', editSong);
router.delete('/song/:id', removeSong);

module.exports = router;