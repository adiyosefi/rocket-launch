import React, { useEffect, useState } from "react";
import axios from "axios";
import LaunchDetailsToShow from "./LaunchDetailsToShow";
import "./LaunchDetails.scss";
import NoLaunchDetailsToShow from "./NoLaunchDetailsToShow";
import { Redirect } from "react-router-dom";
import Loading from "../Loading/Loading";

const LaunchDetails = ({ match }) => {
    const [launch, setLaunch] = useState(null);
    const [launchError, setLaunchError] = useState(null);
    const [loadingLaunch, setLoadingLaunch] = useState(true);

    const apiLaunchURL = `https://launchlibrary.net/1.4/launch/${match.params.launchId}`;

    useEffect(() => {
        setLoadingLaunch(true);
        axios
            .get(apiLaunchURL)
            .then((response) => {
                setLaunch(response.data.launches[0]);
                setLoadingLaunch(false);
            })
            .catch((error) => {
                setLaunchError("Error fetching launch");
                setLoadingLaunch(false);
            });
    }, [apiLaunchURL]);

    if (loadingLaunch) return <Loading/>;

    return (
        <div className="launch-details-container">
            {launch ? <LaunchDetailsToShow launch={launch} /> : !launch ? <Redirect to="/" /> :
                launchError && <NoLaunchDetailsToShow launchError={launchError}/>
            }
        </div>
    )
}

export default LaunchDetails;