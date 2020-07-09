import React, {useEffect, useState} from 'react';
import axios from "axios";
import LaunchDetailsToShow from "./LaunchDetailsToShow";
import './LaunchDetails.scss';
import NoLaunchDetailsToShow from "./NoLaunchDetailsToShow";

const LaunchDetails = ({ match }) => {
    const [launch, setLaunch] = useState(null);
    const [launchError, setLaunchError] = useState(null);

    const apiLaunchURL = `https://launchlibrary.net/1.4/launch/${match.params.launchId}`;
    useEffect(() => {
        axios.get(apiLaunchURL)
            .then(response => {
                console.log(response.data.launches[0]);
                setLaunch(response.data.launches[0]);
            })
            .catch(error => {
                console.log(error);
                setLaunchError("Error fetching launch");
            });
    }, [apiLaunchURL]);
    return (
        <div className="launch-details-container">
            {launch ?
                <LaunchDetailsToShow launch={launch} setLaunch={setLaunch} />
                : <NoLaunchDetailsToShow launchError={launchError} />}
        </div>
    );
};

export default LaunchDetails;