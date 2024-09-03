const catchAsync = require('../utils/catchAsync');
const httpStatus = require('http-status');
const { createSong, listSong, updateSong, deleteSong } = require('../services/song.service');

const postSong = catchAsync( async (req, res) => {
    const song = await createSong(req.body);
    res.status(httpStatus.CREATED).send({ success: true, message: 'new song added', song });
});

const getSong = catchAsync(async (req, res) => {
    const songs = await listSong();
    res.status(httpStatus.OK).json(songs);
});

const editSong = catchAsync( async (req, res) => {
    const songId = await req.params.id;
    const update = await updateSong(songId, req.body);
    res.status(httpStatus.OK).send({ success: true, message: 'song updated', update });
})

const removeSong = catchAsync( async (req, res) => {
    const songId = await req.params.id;
    await deleteSong(songId)
    res.status(httpStatus.OK).send({ success: true, message: 'song deleted'});
})

module.exports = {
    postSong,
    getSong,
    editSong,
    removeSong,
}