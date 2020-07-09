import React from 'react';
import AgenciesList from "../Agencies/AgenciesList";

const RocketDetails = ({ rocket }) => {
    return (
        <div>
            <h3>Rocket</h3>
            <div className="rocket-name">
                <a href={rocket.infoURLs[0]} target='_blank' rel="noopener noreferrer">{rocket.name}</a>
            </div>
            <div className="rocket-agencies">
                { rocket.agencies && rocket.agencies.length !== 0 ?
                    <AgenciesList agencies={rocket.agencies}/>
                    :
                    null
                }
            </div>
        </div>
    );
};

export default RocketDetails;