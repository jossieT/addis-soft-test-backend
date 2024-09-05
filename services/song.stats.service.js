const Song = require("../model/song.model");

//Total Counts: Songs, Artists, Albums, Genres
const getTotalCounts = async () => {
   
        const totalSongs = await Song.countDocuments();

        const [artists, albums, genres] = await Promise.all([
            Song.distinct('artist'),
            Song.distinct('album'),
            Song.distinct('genre')
        ]);

        return {
            totalSongs,
            totalArtists: artists.length,
            totalAlbums: albums.length,
            totalGenres: genres.length
        };
    
};

//Number of Songs in Every Genre
const getSongsPerGenre = async () => {
        const songsPerGenre = await Song.aggregate([
            {
                $group: {
                    _id: "$genre",
                    count: { $sum: 1 }
                }
            },
            {
                $sort: { count: -1 } // Optional: Sort genres by song count descending
            }
        ]);

        return songsPerGenre;
};

//Number of Songs & Albums Each Artist Has
const getSongsAndAlbumsPerArtist = async () => {
        const result = await Song.aggregate([
            {
                $group: {
                    _id: "$artist",
                    songCount: { $sum: 1 },
                    albums: { $addToSet: "$album" }
                }
            },
            {
                $project: {
                    songCount: 1,
                    albumCount: { $size: "$albums" }
                }
            },
            {
                $sort: { songCount: -1 } // Optional: Sort artists by song count descending
            }
        ]);

        return result;
    
};

//Songs in Each Album
const getSongsPerAlbum = async () => {
    
        const songsPerAlbum = await Song.aggregate([
            {
                $group: {
                    _id: "$album",
                    songs: { $push: "$title" },
                    songCount: { $sum: 1 }
                }
            },
            {
                $sort: { songCount: -1 } // Optional: Sort albums by song count descending
            }
        ]);

        return songsPerAlbum;
    
};

module.exports = {  
    getTotalCounts,
    getSongsPerGenre,
    getSongsAndAlbumsPerArtist,
    getSongsPerAlbum,
}
