import React from 'react';

const PadItem = ({name, longitude, latitude}) => {
    let url = `https://www.google.com/maps/embed/v1/place?q=${latitude}+${longitude}&key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8`

    return (
        <div className="pad-container">
            <div className="pad-name">
                {name}
            </div>
            <div className="pad-location">
                <iframe title={name} frameBorder="0" src={url} aria-hidden="false" width="300" height="225"></iframe>
            </div>
        </div>
    );
};

export default PadItem;