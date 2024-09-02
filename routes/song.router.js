const express = require('express');
const validate = require('../middlewares/validate');
const { postSong, getSong } = require('../controller/song.controller');
const { createSongSchema } = require('../validations/song.validation');
const router = express.Router();

router.post('/song',validate(createSongSchema), postSong);
router.get('/songs', getSong);

module.exports = router;