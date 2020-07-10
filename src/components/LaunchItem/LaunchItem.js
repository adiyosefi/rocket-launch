import React, {useCallback, useEffect, useState} from 'react';
import moment from 'moment';
import SuccessTag from "../Tags/SuccessTag";
import FailedTag from "../Tags/FailedTag";
import {Link} from "react-router-dom";
import axios from "axios";
import {validURL} from "../../helpers/helperFunctions"
import AddToFavoriteButton from "./AddToFavoriteButton";
import RemoveFromFavoriteButton from "./RemoveFromFavoriteButton";


const LaunchItem = ({launch, favoriteLaunchesList, setFavoriteLaunchesList, launchesList, setLaunchesList}) => {
    // moment format date taken from- https://stackoverflow.com/questions/15993913/format-date-with-moment-js
    const launchStartDate = moment(launch.windowstart).format("dddd, MMMM Do YYYY, h:mm:ss a");
    const launchEndDate = moment(launch.windowend).format("dddd, MMMM Do YYYY, h:mm:ss a");

    const [rocketImage, setRocketImage] = useState(null);
    const [rocketImageSize, setRocketImageSize] = useState(null);

    useEffect(() => {
        setLaunchesList(launchesList);
        setFavoriteLaunchesList(favoriteLaunchesList);
    }, [launchesList, favoriteLaunchesList])

    const apiLaunchURL = `https://launchlibrary.net/1.4/launch/${launch.id}`;
    useEffect(() => {
        function fetchLaunch() {
            axios.get(apiLaunchURL)
                .then(response => {
                    let tempLaunch = response.data.launches[0];
                    setRocketImage(tempLaunch.rocket.imageURL);
                    setRocketImageSize(tempLaunch.rocket.imageSizes[0]);
                })
                .catch(error => {
                    console.log(error);

                });
        }
        fetchLaunch()
    }, [apiLaunchURL]);

    const isInFavoriteLaunchesList = (launchId) => {
        for (let i = 0 ; i < favoriteLaunchesList.length ; i++){
            if (favoriteLaunchesList[i] === launchId){
                return true;
            }
        }
        return false;
    };

    return (
        <div className="container-per-launch">
            <div className="launch-rocket-image-container">
                {validURL(rocketImage) ?
                    <img width={rocketImageSize} src={rocketImage} alt={launch.name}/>
                    :
                    null
                }
            </div>
            <div className="launch-name-container">
                <Link to={`/${launch.id}`} className="launch-link">
                    <h5>{launch.name}</h5>
                </Link>
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
            <div className="button-container">
                { isInFavoriteLaunchesList(launch.id) ?
                    <RemoveFromFavoriteButton launch={launch}
                                              favoriteLaunchesList={favoriteLaunchesList}
                                              setFavoriteLaunchesList={setFavoriteLaunchesList}
                                              launchesList={launchesList}
                                              setLaunchesList={setLaunchesList}/>
                    :
                    <AddToFavoriteButton launch={launch}
                                         favoriteLaunchesList={favoriteLaunchesList}
                                         setFavoriteLaunchesList={setFavoriteLaunchesList}
                                         launchesList={launchesList}
                                         setLaunchesList={setLaunchesList} />
                }
            </div>
        </div>
    );

};

export default LaunchItem;