import React from 'react';
import Loading from "../Loading/Loading";

const NoLaunchDetailsToShow = ({launchError}) => {
    return (
        <div className="no-launch-content">
            {launchError ?
                launchError
                : <Loading />}
        </div>
    );
};

export default NoLaunchDetailsToShow;