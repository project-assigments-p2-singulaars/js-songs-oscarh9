import {songs} from './data.js';

//Exercise 1: Get the array of all Artists.
function getAllArtists(songs){
    let result = songs.map(songs => songs.artist);

    return result;
};

//Exercise 2: Get the songs of a certain artist
function getSongsFromArtist(songs, artist){
    let songFromArtist = songs.filter(songs => songs.artist === artist);

    return songFromArtist;
};

//Exercise 3: Alphabetic order by title
function orderAlphabetically(songs){
    let songsCopy = songs.slice();
    let sortedSongs = songsCopy.sort((a, b) => a.title.localeCompare(b.title));
    let titles = sortedSongs.map(song => song.title);

    return titles.slice(0, 10);
};

//Exercise 4: Order by year, ascending
function orderByYear(songs){
    let songsCopy = songs.slice();
    let sortedSongs = songsCopy.sort((a, b) => {
        if (a.year !== b.year) {
            return a.year - b.year;
        } else {
            return a.title.localeCompare(b.title);
        }
    });
return sortedSongs;
};

//Exercise 5: Filter songs by genre
function songsByGenre(songs, genre) {
    //Write your code here
    let copyOfArray = [...songs]
    return copyOfArray.filter (songs => songs.genre.includes(genre));
};
const genre = "Pop"
let songsOfPop = songsByGenre(songs, genre)
console.log(songsOfPop)

//Exercise 6: Modify the duration of songs to seconds
function minutsToSeconds(songs) {
    const updatedSongs = [];
    for (let i = 0; i < songs.length; i++) {
        const song = songs[i];
        const durationParts = song.duration.split('min ');
        if (durationParts.length === 2) {
            const minutes = parseInt(durationParts[0]);
            const secondsPart = durationParts[1];
            if (secondsPart) {
                const seconds = parseInt(secondsPart.replace('sec', ''));
                const totalSeconds = minutes * 60 + seconds;
                updatedSongs.push({
                    ...song,
                    duration: totalSeconds
                });
            } else {
                console.log('Error: No se encontró la parte de los segundos en el formato de duración para la canción: ' + song.title);
            }
        } else {
            console.log('Error: El formato de la duración no es válido para la canción: ' + song.title);
        }
    }
    return updatedSongs;
}
const updatedSongs = minutsToSeconds(songs);
console.log(updatedSongs);

//Exercise 7: Get the longest song
function getLongestSong(songs) {
    if (songs.length === 0) {
        return [];
    }

    const maxLength = Math.max(...songs.map(song => song.duration));
    const longestSongs = songs.filter(song => song.duration === maxLength);
    return longestSongs.map(song => ({...song}));
}

//Exercise 8: Get the shortest song
function getShortestSong(songs)




export { getAllArtists, getSongsFromArtist, orderAlphabetically, orderByYear, songsByGenre, minutsToSeconds, getLongestSong };
