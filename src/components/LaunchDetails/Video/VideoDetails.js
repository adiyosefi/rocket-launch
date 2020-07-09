import React from 'react';
import ReactPlayer from 'react-player'


const VideoDetails = ( { vidURL } ) => {
    return (
        <div>
            <h3>Video</h3>
            <div className="video-container">
                <ReactPlayer url={vidURL} />
            </div>
        </div>
    );
};

export default VideoDetails;