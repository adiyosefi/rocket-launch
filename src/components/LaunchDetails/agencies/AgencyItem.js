import React from "react";
import "../LaunchDetails.scss";
import LaunchLink from "../../common/LaunchLink";

const AgencyItem = ({ name, infoURLs, countryCode }) => (
    <div>
        <div className="agency-name">
            <LaunchLink href={infoURLs[0]} title={name}/>
        </div>
        <div className="agency-country">
            {countryCode && (
                <span>
                  <i className="fa fa-large fa-globe"/>&nbsp; {countryCode}
                </span>
            )}
        </div>
    </div>
);

export default AgencyItem;