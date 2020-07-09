import React from 'react';
import SuccessTag from "../Tags/SuccessTag";
import FailedTag from "../Tags/FailedTag";
import moment from "moment";
import LaunchServiceProviderDetails from "./LaunchServiceProvider/LaunchServiceProviderDetails";
import LocationDetails from "./Location/LocationDetails";
import RocketDetails from "./Rocket/RocketDetails";
import MissionsDetails from "./Missions/MissionsDetails";
import FailReason from "./Reasons/FailReason";
import HoldReason from "./Reasons/HoldReason";
import InfoURLDetails from "./InfoURL/InfoURLDetails";
import VideoDetails from "./Video/VideoDetails";
import {validURL} from "../../helpers/helperFunctions"

const LaunchDetailsToShow = ({launch, setLaunch}) => {
    // moment format date taken from- https://stackoverflow.com/questions/15993913/format-date-with-moment-js
    const launchStartDate = moment(launch.windowstart).format("dddd, MMMM Do YYYY, h:mm:ss a");
    const launchEndDate = moment(launch.windowend).format("dddd, MMMM Do YYYY, h:mm:ss a");

    return (
        <div>
            <div className="launch-rocket-image-container">
                {validURL(launch.rocket.imageURL) ?
                    <img width={launch.rocket.imageSizes[0]} src={launch.rocket.imageURL} alt={launch.rocket.name}/>
                    :
                    null
                }
            </div>
            <div className="launch-name-container">
                <h2>{launch.name}</h2>
            </div>
            <div className="launch-start-date-container">
                Start: {launchStartDate}
            </div>
            <div className="launch-end-date-container">
                End: {launchEndDate}
            </div>
            <div className="launch-success-container">
                {launch.status === 3 ?
                    <SuccessTag /> :
                    launch.status === 4 ? <FailedTag /> :
                        null
                }
            </div>
            <div className="launch-fail-reason-container">
                { launch.failreason ?
                    <FailReason failreason={launch.failreason}/> :
                    null
                }
            </div>
            <div className="launch-hold-reason-container">
                { launch.holdreason ?
                    <HoldReason holdreason={launch.holdreason}/> :
                    null
                }
            </div>
            <div className="button-container">

            </div>
            <hr/>
            <div className="lsp-container">
                <LaunchServiceProviderDetails lsp={launch.lsp}/>
            </div>
            <hr/>
            <div  className="location-container">
                <LocationDetails location={launch.location}/>
            </div>
            <hr/>
            <div  className="rocket-container">
                <RocketDetails rocket={launch.rocket}/>
            </div>
            <hr/>
            <div  className="missions-container">
                {launch.missions.length !== 0 ?
                    <MissionsDetails missions={launch.missions}/>
                    :
                    null
                }
            </div>
            <hr/>
            <div  className="vidURL-container">
                {launch.vidURLs.length !== 0 ?
                    <VideoDetails vidURL={launch.vidURLs[0]}/>
                    :
                    null
                }
            </div>
            <hr/>
            <div  className="infoURL-container">
                {launch.infoURLs.length !== 0 ?
                    <InfoURLDetails infoURL={launch.infoURLs[0]}/>
                    :
                    null
                }
            </div>
        </div>
    );
};

export default LaunchDetailsToShow;