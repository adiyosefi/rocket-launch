import React from 'react';
import AgenciesList from "../Agencies/AgenciesList";
import '../LaunchDetails.scss'

const RocketDetails = ({ rocket }) =>
    <>
        <div className="rocket-container">
            <h3>Rocket</h3>
            <div className="rocket-name">
                <a href={rocket.infoURLs[0]} target='_blank' rel="noopener noreferrer">{rocket.name}</a>
            </div>
            {
                rocket.agencies && rocket.agencies.length !== 0 ?
                    <AgenciesList agencies={rocket.agencies}/>
                    :
                    null
            }
        </div>
        <b className="hr"></b>
    </>

export default RocketDetails;