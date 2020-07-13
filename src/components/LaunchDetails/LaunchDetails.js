import React, {useEffect, useState} from 'react';
import axios from "axios";
import LaunchDetailsToShow from "./LaunchDetailsToShow";
import './LaunchDetails.scss';
import NoLaunchDetailsToShow from "./NoLaunchDetailsToShow";
import {Redirect} from "react-router-dom";

const LaunchDetails = ({ match }) => {
    const [launch, setLaunch] = useState(null);
    const [launchError, setLaunchError] = useState(null);
    const [loadingLaunch, setLoadingLaunch] = useState(true)

    const apiLaunchURL = `https://launchlibrary.net/1.4/launch/${match.params.launchId}`;
    useEffect(() => {
        setLoadingLaunch(true);
        axios.get(apiLaunchURL)
            .then(response => {
                console.log(response.data.launches[0]);
                setLaunch(response.data.launches[0]);
                setLoadingLaunch(false);
            })
            .catch(error => {
                console.log(error);
                setLaunchError("Error fetching launch");
                setLoadingLaunch(false);
            });
    }, [apiLaunchURL]);
    return (
        <div className="launch-details-container">
            { loadingLaunch ?
                <NoLaunchDetailsToShow launchError={launchError} loadingLaunch={loadingLaunch} /> :
                launch && !loadingLaunch ?
                <LaunchDetailsToShow launch={launch} setLaunch={setLaunch} />
                : !loadingLaunch && !launch  ?
                        <Redirect to="/" /> : null}
        </div>
    );
};

export default LaunchDetails;