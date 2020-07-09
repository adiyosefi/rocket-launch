import React from 'react';
import Loading from "../Loading/Loading";

const NoLaunchesToShow = ({showLaunchesListError}) => {
    return (
        <div className="no-launches-content">
        {showLaunchesListError ?
                showLaunchesListError
                : <Loading />}
        </div>
    );
};

export default NoLaunchesToShow;