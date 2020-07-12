import React from 'react';
import MissionItem from "./MissionItem";
import '../LaunchDetails.scss';

const MissionsDetails = ({missions}) => {
    const missionsList = missions.map((mission) =>
        <li key={mission.id} className="mission-item">
            <MissionItem name={mission.name} type={mission.typeName} description={mission.description}
                         agencies={mission.agencies} wikiURL={mission.wikiURL} payloads={mission.payloads} />
        </li>
    )

    return (
        <>
            <div className="missions-container">
                <h3>Missions</h3>
                <div className="missions-list">
                    <ul>
                        {missionsList}
                    </ul>
                </div>
            </div>
            <b className="hr"></b>
        </>
    );
};

export default MissionsDetails;