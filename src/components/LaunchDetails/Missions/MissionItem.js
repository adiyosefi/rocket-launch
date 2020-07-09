import React from 'react';
import AgenciesList from "../Agencies/AgenciesList";
import PayloadsList from "./Payloads/PayloadsList";

const MissionItem = ({name, type, description, agencies, wikiURL, payloads}) => {
    return (
        <div>
            <div className="mission-name">
                {name}
            </div>
            <div className="mission-type">
                Type: {type}
            </div>
            <div className="mission-description">
                Description: {description}
            </div>
            <div className="mission-wikiURL">
                <a href={wikiURL} target='_blank' rel="noopener noreferrer">More info</a>
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