import React from 'react';
import Loading from "../Loading/Loading";

const NoLaunchDetailsToShow = ({launchError, loadingLaunch}) => {
    return (
        <div className="no-launch-content">
            {launchError ?
                launchError
                : loadingLaunch ?
                    <Loading /> :
                        null}
        </div>
    );
};

export default NoLaunchDetailsToShow;