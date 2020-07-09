import React from 'react';

const InfoUrlDetails = ( { infoURL } ) => {
    return (
        <div>
            <button><a href={infoURL} target='_blank' rel="noopener noreferrer">For more information click here</a></button>
        </div>
    );
};

export default InfoUrlDetails;