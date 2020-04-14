import React from 'react';
import {connect} from 'react-redux';
import {selectSong} from '../actions';

const SongList = ({songs, selectSong}) => {
    return (
        <ul>
            {
                songs.map(song => (
                    <li key={song.title}
                        onClick={()=> selectSong(song)}
                    >
                        <div className="row">
                            <div className="col-8">{song.title}</div>
                            <div className="col-4">{song.duration}</div>
                        </div>
                    </li>
                ))
            }
        </ul>
    )
};

const mapStateToProps = state => {
    return {
        songs: state.songs
    };
};

export default connect(mapStateToProps, {
    selectSong: selectSong
})(SongList);