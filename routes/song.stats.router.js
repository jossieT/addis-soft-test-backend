const express = require('express');
const { totalCounts, songsAndAlbumsPerArtist, songsPerAlbum, songsPerGenre } = require('../controller/song.stats.controller');

const router = express.Router();

router.get('/songs/total-songs', totalCounts);
router.get('/songs/songs-albums-per-artist', songsAndAlbumsPerArtist);
router.get('/songs/songs-per-album', songsPerAlbum);
router.get('/songs/songs-per-genre', songsPerGenre);

module.exports = router;