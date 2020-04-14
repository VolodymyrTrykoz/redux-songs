import {combineReducers} from 'redux';

const songsReduces = () => {
    return [
        {title: 'All stars', duration: '4:05'},
        {title: 'I want it that way', duration: '2:35'},
        {title: 'Macarena', duration: '3:16'},
        {title: 'Rock Star', duration: '3:37'},
    ]
 };

const selectedSongReduces = (selectedSong = null, action) => {
    if(action.type === 'SONG_SELECTED'){
        return action.payload
    }
    return selectedSong;
};

export default  combineReducers({
    songs: songsReduces,
    selectedSong: selectedSongReduces,
});

