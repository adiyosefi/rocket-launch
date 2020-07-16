import React, { useContext } from "react";
import LaunchServiceProviderDetails from "./LaunchServiceProvider/LaunchServiceProviderDetails";
import LocationDetails from "./Location/LocationDetails";
import RocketDetails from "./Rocket/RocketDetails";
import MissionsDetails from "./Missions/MissionsDetails";
import InfoURLDetailsButton from "./InfoURL/InfoURLDetailsButton";
import VideoDetails from "./Video/VideoDetails";
import { Link } from "react-router-dom";
import { LaunchesContext } from "../../context/launches";
import LaunchImage from "../LaunchImage/LaunchImage";
import LaunchDate from "../Dates/LaunchDate";
import LaunchStatus from "../Status/LaunchStatus";
import FavoriteButton from "../Buttons/FavoriteButton";
import ErrorReason from "./Reasons/ErrorReason";

const LaunchDetailsToShow = ({ launch }) => {
    const {windowstart,
        windowend,
        rocket,
        name,
        status,
        failreason,
        holdreason,
        lsp,
        location,
        missions,
        vidURLs,
        infoURLs
    } = launch;

    const { favoriteLaunchesList } = useContext(LaunchesContext);

    return (
        <div className="launches-to-show-container">
            <div className="all-launches-link-container">
                <Link to={`/`} className="all-launches-link">
                    <i className="fa fa-arrow-left"/> Back to All Launches
                </Link>
            </div>
            <LaunchImage imageURL={rocket.imageURL} name={rocket.name} imageSize={rocket.imageSizes[0]}/>
            <div className="launch-name-container">
                <h2>{name}</h2>
            </div>
            <div className="launch-metadata-container">
                <div className="launch-dates-status-container">
                    <div className="launch-dates-container">
                        <div className="launch-start-date-container">
                            <LaunchDate label="Start" date={windowstart}/>
                        </div>
                        <div className="launch-end-date-container">
                            <LaunchDate label="End" date={windowend}/>
                        </div>
                    </div>
                    <div className="launch-status-container">
                        <LaunchStatus status={status}/>
                        <div className="launch-fail-reason-container">
                            {failreason && (
                                <ErrorReason label="Fail" reason={failreason} />
                            )}
                        </div>
                        <div className="launch-hold-reason-container">
                            {holdreason && (
                                <ErrorReason label="Hold" reason={holdreason} />
                            )}
                        </div>
                    </div>
                </div>
                <FavoriteButton launch={launch}
                                favoriteLaunchesList={favoriteLaunchesList}/>
            </div>
            <b className="hr"/>
            {lsp && <LaunchServiceProviderDetails lsp={lsp} />}
            {location && <LocationDetails location={location} />}
            {rocket && <RocketDetails rocket={rocket} />}
            {missions && missions.length !== 0 && (
                <MissionsDetails missions={missions} />
            )}
            {vidURLs && vidURLs.length !== 0 && (
                <VideoDetails vidURL={vidURLs[0]} />
            )}
            {infoURLs && infoURLs.length !== 0 && (
                <InfoURLDetailsButton infoURL={infoURLs[0]} />
            )}
        </div>
    );
};

export default LaunchDetailsToShow;