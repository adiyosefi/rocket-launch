import React from 'react';
import "../LaunchDetails/LaunchDetails.scss";
import {validURL} from "../../utilities/helper_function";

const LaunchImage = ({ imageURL, name, imageSize }) => {
    if (validURL(imageURL)) {
        return (
            <div className="launch-rocket-image-container">
                <img
                    width={imageSize}
                    src={imageURL}
                    alt={name}
                />
            </div>
        );
    }
};

export default LaunchImage;