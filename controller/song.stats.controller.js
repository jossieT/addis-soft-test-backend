const catchAsync = require('../utils/catchAsync');
const httpStatus = require('http-status');
const { getTotalCounts, getSongsAndAlbumsPerArtist, getSongsPerAlbum, getSongsPerGenre } = require('../services/song.stats.service');

const totalCounts = catchAsync (async (req, res) => {
    const counts = await getTotalCounts();
    res.status(httpStatus.OK).json(counts);
});

const songsAndAlbumsPerArtist = catchAsync (async (req, res) => {
    const songsAndAlbums = await getSongsAndAlbumsPerArtist();
    res.status(httpStatus.OK).json(songsAndAlbums);
});

const songsPerAlbum = catchAsync (async (req, res) => {
    const songsAlbum = await getSongsPerAlbum();
    res.status(httpStatus.OK).json(songsAlbum);
});

const songsPerGenre = catchAsync (async (req, res) => {
    const songsGenre = await getSongsPerGenre();
    res.status(httpStatus.OK).json(songsGenre);
});

module.exports = {
    totalCounts,
    songsAndAlbumsPerArtist,
    songsPerAlbum,
    songsPerGenre,
}