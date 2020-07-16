import React from 'react';

const NoLaunchDetailsToShow = ({launchError}) => (
    <div className="no-launch-content">
        {launchError}
    </div>
);

export default NoLaunchDetailsToShow;