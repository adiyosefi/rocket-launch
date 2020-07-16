import React from "react";
import AgenciesList from "./agencies/AgenciesList";
import "./LaunchDetails.scss";
import LaunchLink from "../common/LaunchLink";

const RocketDetails = ({ rocket }) => (
    <>
        <div className="rocket-container">
            <h3>Rocket</h3>
            <div className="rocket-name">
                <LaunchLink href={rocket.infoURLs[0]} title={rocket.name}/>
            </div>
            {rocket.agencies && rocket.agencies.length !== 0 && (
                <AgenciesList agencies={rocket.agencies} />
            )}
        </div>
        <b className="hr"/>
    </>
);

export default RocketDetails;