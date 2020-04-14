import React from 'react';

import SongList from './song-list';
import SongDetails from './song-details';

const App = () => {
    return (
        <div className="container">
            <div className="row">
                <div className="col-6">
                    <SongList/>
                </div>
                <div className="col-6">
                    <SongDetails/>
                </div>
            </div>
        </div>
    )
};

export default App;