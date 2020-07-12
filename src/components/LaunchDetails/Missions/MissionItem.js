import React from 'react';
import AgenciesList from "../Agencies/AgenciesList";
import PayloadsList from "./Payloads/PayloadsList";
import '../LaunchDetails.scss';

const MissionItem = ({name, type, description, agencies, wikiURL, payloads}) => {
    return (
        <div>
            <div className="mission-name">
                <h4>{name}</h4>
            </div>
            <div className="mission-metadata">
                <div className="mission-type">
                    <span>Type:</span> {type}
                </div>
                <div className="mission-description">
                    <span>Description:</span>
                    <div>
                    {description}
                    </div>
                </div>
                <div className="mission-wikiURL">
                    <a href={wikiURL} target='_blank' rel="noopener noreferrer">More info</a>
                </div>
            </div>
            <div className="mission-agencies">
                { agencies && agencies.length !== 0 ?
                    <AgenciesList agencies={agencies}/>
                    :
                    null
                }
            </div>
            <div className="mission-payloads">
                { payloads && payloads.length !== 0 ?
                    <PayloadsList payloads={payloads}/>
                    :
                    null
                }
            </div>
        </div>
    );
};

export default MissionItem;