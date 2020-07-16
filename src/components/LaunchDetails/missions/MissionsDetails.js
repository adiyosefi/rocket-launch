import React from "react";
import MissionItem from "./MissionItem";
import "../LaunchDetails.scss";

const MissionsDetails = ({ missions }) => {
    const missionsList = missions.map((mission) => {
        const {id,
            name,
            typeName,
            description,
            agencies,
            wikiURL,
            payloads
        } = mission;
        return (
            <li key={id} className="mission-item">
                <MissionItem
                    name={name}
                    type={typeName}
                    description={description}
                    agencies={agencies}
                    wikiURL={wikiURL}
                    payloads={payloads}
                />
            </li>
        )});

    return (
        <>
            <div className="missions-container">
                <h3>Missions</h3>
                <div className="missions-list">
                    <ul>{missionsList}</ul>
                </div>
            </div>
            <b className="hr"/>
        </>
    );
};

export default MissionsDetails;