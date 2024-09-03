const Song = require("../model/song.model");

const createSong = async (body) => {

    return await Song.create(body)
};

const listSong = async () => {
    const songs = await Song.find({});
    return songs
};

const updateSong = async (id, body) => {
    const updatedSong = await Song.findByIdAndUpdate(id, body, { new: true, runValidators: true });
    return updatedSong;
}

const deleteSong = async (id) => {
    const deletedSong = await Song.findByIdAndDelete(id);
    return deletedSong;
}

module.exports = {
    createSong,
    listSong,
    updateSong,
    deleteSong
}