import React, {useContext} from 'react';
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
import RemoveFromFavoriteButton from "../Buttons/RemoveFromFavoriteButton";
import AddToFavoriteButton from "../Buttons/AddToFavoriteButton";
import {Link} from "react-router-dom";
import {LaunchesContext} from "../../context/launches";

const LaunchDetailsToShow = ({launch}) => {
    // moment format date taken from- https://stackoverflow.com/questions/15993913/format-date-with-moment-js
    const launchStartDate = moment(launch.windowstart).format("dddd, MMMM Do YYYY, h:mm:ss a");
    const launchEndDate = moment(launch.windowend).format("dddd, MMMM Do YYYY, h:mm:ss a");

    const {favoriteLaunchesList} = useContext(LaunchesContext);

    const isInFavoriteLaunchesList = (launchId) => {
        for (let i = 0 ; i < favoriteLaunchesList.length ; i++){
            if (favoriteLaunchesList[i].id === launchId){
                return true;
            }
        }
        return false;
    };

    return (
        <div className="launches-to-show-container">
            <div className="all-launches-link-container">
                <Link to={`/`} className="all-launches-link"><i className="fa fa-arrow-left"></i> Back to All Launches</Link>
            </div>
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
            <div className="launch-metadata-container">
                <div className="launch-dates-status-container">
                    <div className="launch-dates-container">
                        <div className="launch-start-date-container">
                            <span>Start:</span> {launchStartDate}
                        </div>
                        <div className="launch-end-date-container">
                            <span>End:</span> {launchEndDate}
                        </div>
                    </div>
                    <div className="launch-status-container">
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
                    </div>
                </div>
                <div className="button-container">
                    {isInFavoriteLaunchesList(launch.id) ?
                        <RemoveFromFavoriteButton launch={launch}
                                                  favoriteLaunchesList={favoriteLaunchesList} />
                        :
                        <AddToFavoriteButton launch={launch}
                                             favoriteLaunchesList={favoriteLaunchesList} />
                    }
                </div>
            </div>
            <b className="hr"></b>
            {
                launch.lsp ?
                    <LaunchServiceProviderDetails lsp={launch.lsp}/>
                    : null
            }
            {
                launch.location ?
                    <LocationDetails location={launch.location}/>
                    : null
            }
            {
                launch.rocket ?
                    <RocketDetails rocket={launch.rocket}/>
                    : null
            }
            {launch.missions.length !== 0 ?
                <MissionsDetails missions={launch.missions}/>
                :
                null
            }
            {launch.vidURLs.length !== 0 ?
                <VideoDetails vidURL={launch.vidURLs[0]}/>
                :
                null
            }
            {launch.infoURLs.length !== 0 ?
                <InfoURLDetails infoURL={launch.infoURLs[0]}/>
                :
                null
            }
        </div>
    );
};

export default LaunchDetailsToShow;