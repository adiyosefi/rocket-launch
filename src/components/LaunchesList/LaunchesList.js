import React from 'react';
import LaunchesToShow from "./LaunchesToShow";
import NoLaunchesToShow from "./NoLaunchesToShow";

const LaunchesList = ({launchesList, setLaunchesList, showLaunchesListError}) => {
    return (
        <div className="launches-content-container">
            {launchesList.length !== 0 ?
                <LaunchesToShow launchesList={launchesList} setLaunchesList={setLaunchesList} />
                : <NoLaunchesToShow showLaunchesListError={showLaunchesListError} />}
        </div>
    );
};

export default LaunchesList;