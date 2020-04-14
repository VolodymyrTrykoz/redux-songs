import React from 'react';
import {connect} from 'react-redux';

const SongDetails = ({selectedSong}) => {

    return (
        <>
            { selectedSong &&
                <p>
                    { selectedSong.title }<br/>
                    { selectedSong.duration }
                </p>
            }
        </>
    )
};

const mapStateToProps = state => {
    return { selectedSong: state.selectedSong }
};

export default connect(mapStateToProps)(SongDetails);