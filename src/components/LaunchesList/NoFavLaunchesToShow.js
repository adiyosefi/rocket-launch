import React from 'react';
import Loading from "../Loading/Loading";
import './LaunchesList.scss'


const NoFavLaunchesToShow = ({errorFavoriteLaunches, favoriteLaunchesList, favLaunchesSearchResults}) => {
    return (
        <div className="no-launches-content">
            {errorFavoriteLaunches || favoriteLaunchesList.length === 0 ?
                "No launches to show..."
                : <Loading />}
        </div>
    );
};

export default NoFavLaunchesToShow;