const catchAsync = require('../utils/catchAsync');
const httpStatus = require('http-status');
const { createSong, listSong } = require('../services/song.service');

const postSong = catchAsync( async (req, res) => {
    const song = await createSong(req.body);
    res.status(httpStatus.CREATED).send({ success: true, message: 'new song added', song });
});

const getSong = catchAsync(async (req, res) => {
    const songs = await listSong();
    res.status(httpStatus.OK).json(songs);
});

module.exports = {
    postSong,
    getSong,
}