import React from 'react';
import Loading from "../Loading/Loading";

const NoLaunchDetailsToShow = ({launchError, loadingLaunch}) =>
    <div className="no-launch-content">
        {
            launchError ?
                launchError
                : loadingLaunch ?
                <Loading /> :
                null
        }
    </div>

export default NoLaunchDetailsToShow;