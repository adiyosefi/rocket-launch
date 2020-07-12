import React from 'react';
import '../LaunchDetails.scss'

const InfoUrlDetails = ( { infoURL } ) => {
    return (
        <div className="infoURL-container">
            <button><a href={infoURL} target='_blank' rel="noopener noreferrer">For more information click here	&nbsp; <i className="fa fa-external-link"></i></a></button>
        </div>
    );
};

export default InfoUrlDetails;