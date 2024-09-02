const Song = require("../model/song.model");

const createSong = async (body) => {

    return await Song.create(body)
};

const listSong = async () => {
    const songs = await Song.find({});
    return songs
};

module.exports = {
    createSong,
    listSong,
}