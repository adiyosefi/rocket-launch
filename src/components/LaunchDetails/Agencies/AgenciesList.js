import React from 'react';
import AgencyItem from "./AgencyItem";

const AgenciesList = ({ agencies }) => {
    const agenciesList = agencies.map((agency) =>
        <li key={agency.id} className="agency-item">
            <AgencyItem name={agency.name} infoURLs={agency.infoURLs} countryCode={agency.countryCode} />
        </li>
    )

    return (
        <div>
            <h4>Agencies</h4>
            <ul>
                {agenciesList}
            </ul>
        </div>
    );
};

export default AgenciesList;