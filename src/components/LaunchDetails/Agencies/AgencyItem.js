import React from 'react';
import '../LaunchDetails.scss'

const AgencyItem = ({ name, infoURLs, countryCode }) => {
    return (
        <div>
            <div className="agency-name">
                <a href={infoURLs[0]} target='_blank' rel="noopener noreferrer">{name}</a>
            </div>
            <div className="agency-country">
                {countryCode ?
                    <span><i className="fa fa-large fa-globe"></i> {countryCode}</span>
                    :
                    null
                }
            </div>
        </div>
    );
};

export default AgencyItem;