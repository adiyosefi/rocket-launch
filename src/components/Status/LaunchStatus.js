import React from 'react';
import '../LaunchDetails/LaunchDetails.scss';
import '../LaunchItem/LaunchItem.scss'
import Tag from "./Tag";

const LaunchStatus = ({ status }) => {
    const SUCCESS = 3;
    const FAIL = 4;
    return (
        <div className="launch-success-container">
            {status === SUCCESS ? (
                <Tag label="Succeed"/>
            ) : status === FAIL ? (
                <Tag label="Failed"/>
                // on any other status, return null
            ) : null}
        </div>
    );
};

export default LaunchStatus;