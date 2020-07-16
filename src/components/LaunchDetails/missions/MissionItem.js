import React from "react";
import AgenciesList from "../agencies/AgenciesList";
import PayloadsList from "./Payloads/PayloadsList";
import "../LaunchDetails.scss";
import LaunchLink from "../../common/LaunchLink";

const MissionItem = ({
    name,
    type,
    description,
    agencies,
    wikiURL,
    payloads,
}) => (
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
                <div>{description}</div>
            </div>
            <div className="mission-wikiURL">
                <LaunchLink href={wikiURL} title="More info"/>
            </div>
        </div>
        <div className="mission-agencies">
            {agencies && agencies.length !== 0 && (
                <AgenciesList agencies={agencies} />
            )}
        </div>
        <div className="mission-payloads">
            {payloads && payloads.length !== 0 && (
                <PayloadsList payloads={payloads} />
            )}
        </div>
    </div>
);

export default MissionItem;