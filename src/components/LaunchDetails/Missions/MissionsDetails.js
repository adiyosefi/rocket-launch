import React from 'react';
import MissionItem from "./MissionItem";

const MissionsDetails = ({missions}) => {
    const missionsList = missions.map((mission) =>
        <li key={mission.id} className="mission-item">
            <MissionItem name={mission.name} type={mission.typeName} description={mission.description}
                         agencies={mission.agencies} wikiURL={mission.wikiURL} payloads={mission.payloads} />
        </li>
    )

    return (
        <div>
            <h3>Missions</h3>
            <div className="missions-list">
                <ul>
                    {missionsList}
                </ul>
            </div>
        </div>
    );
};

export default MissionsDetails;