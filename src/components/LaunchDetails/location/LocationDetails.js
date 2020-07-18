import React from "react";
import PadItem from "./PadItem";
import "../LaunchDetails.scss";

const LocationDetails = ({ location }) => {
    const locationPads = location.pads.map((pad) => (
        <li key={pad.id} className="pad-item">
            <PadItem
                name={pad.name}
                longitude={pad.longitude}
                latitude={pad.latitude}
            />
        </li>
    ));

    return (
        <>
            <div className="location-container">
                <div className="location-meta-container">
                    <h3>Location</h3>
                    <div className="location-name">{location.name}</div>
                </div>
                {location.pads.length !== 0 && (
                    <div className="location-pads">
                        <h4>Pads</h4>
                        <ul>{locationPads}</ul>
                    </div>
                )}
            </div>
            <b className="hr"/>
        </>
    );
};

export default LocationDetails;