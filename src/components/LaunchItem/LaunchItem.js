import React, {useCallback, useContext, useEffect, useState} from 'react';
import moment from 'moment';
import SuccessTag from "../Tags/SuccessTag";
import FailedTag from "../Tags/FailedTag";
import {Link} from "react-router-dom";
import axios from "axios";
import {validURL} from "../../helpers/helperFunctions"
import AddToFavoriteButton from "../Buttons/AddToFavoriteButton";
import RemoveFromFavoriteButton from "../Buttons/RemoveFromFavoriteButton";
import './LaunchItem.scss'
import {LaunchesContext} from "../../context/launches";


const LaunchItem = ({launch, favoriteLaunchesList}) => {
    // moment format date taken from- https://stackoverflow.com/questions/15993913/format-date-with-moment-js
    const launchStartDate = moment(launch.windowstart).format("dddd, MMMM Do YYYY, h:mm:ss a");
    const launchEndDate = moment(launch.windowend).format("dddd, MMMM Do YYYY, h:mm:ss a");

    const isInFavoriteLaunchesList = (launchId) => {
        for (let i = 0 ; i < favoriteLaunchesList.length ; i++){
            if (favoriteLaunchesList[i].id === launchId){
                return true;
            }
        }
        return false;
    };

    return (
        <div className="container-per-launch">
            <div className="launch-rocket-image-container">
                {validURL(launch.rocket.imageURL) ?
                    <img width={launch.rocket.imageSizes[0]} src={launch.rocket.imageURL} alt={launch.name}/>
                    :
                    null
                }
            </div>
            <div className="launch-metadata-container">
                <div className="launch-name-container">
                    <Link to={`/${launch.id}`} className="launch-link">
                        <h5>{launch.name}</h5>
                    </Link>
                </div>
                <div className="launch-start-date-container">
                    <span>Start:</span> {launchStartDate}
                </div>
                <div className="launch-end-date-container">
                    <span>End:</span> {launchEndDate}
                </div>
            </div>
            <div className="launch-success-container">
                {launch.status === 3 ?
                    <SuccessTag /> :
                    launch.status === 4 ? <FailedTag /> :
                        null
                }
            </div>
            <div className="button-container">
                { isInFavoriteLaunchesList(launch.id) ?
                    <RemoveFromFavoriteButton launch={launch}
                                              favoriteLaunchesList={favoriteLaunchesList} />
                    :
                    <AddToFavoriteButton launch={launch}
                                         favoriteLaunchesList={favoriteLaunchesList} />
                }
            </div>
        </div>
    );

};

export default LaunchItem;