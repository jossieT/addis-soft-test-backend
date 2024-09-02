const joi = require('joi');

const createSongSchema =  {
    body: joi.object().keys({
        title: joi.string().required(),
        artist: joi.string().required(),
        album: joi.string().required(),
        genre: joi.string().required(),
    }) 
};

module.exports = {
    createSongSchema,
}