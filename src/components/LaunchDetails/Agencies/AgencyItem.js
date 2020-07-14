import React from 'react';
import '../LaunchDetails.scss'

const AgencyItem = ({ name, infoURLs, countryCode }) =>
    <div>
        <div className="agency-name">
            <a href={infoURLs[0]} target='_blank' rel="noopener noreferrer">{name}</a>
        </div>
        <div className="agency-country">
            {countryCode ?
                <span><i className="fa fa-large fa-globe"></i>&nbsp; {countryCode}</span>
                :
                null
            }
        </div>
    </div>

export default AgencyItem;