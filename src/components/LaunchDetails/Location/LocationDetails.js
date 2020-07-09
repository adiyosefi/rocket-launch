import React from 'react';
import PadItem from "./PadItem";

const LocationDetails = ({location}) => {
    const locationPads = location.pads.map((pad) =>
        <li key={pad.id} className="pad-item">
            <PadItem name={pad.name} longitude={pad.longitude} latitude={pad.latitude} />
        </li>
    )

    return (
        <div>
            <h3>Location</h3>
            <div className="location-name">
                {location.name}
            </div>
            <div className="location-pads">
                <h4>Pads</h4>
                <ul>
                    {locationPads}
                </ul>
            </div>
        </div>
    );
};

export default LocationDetails;