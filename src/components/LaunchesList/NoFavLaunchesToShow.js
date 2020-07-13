import React, {useContext} from 'react';
import Loading from "../Loading/Loading";
import './LaunchesList.scss'
import {LaunchesContext} from "../../context/launches";

const NoFavLaunchesToShow = ({favoriteLaunchesList}) => {
    const {errorFavoriteLaunches} = useContext(LaunchesContext);

    return (
        <div className="no-launches-content">
            {errorFavoriteLaunches || favoriteLaunchesList.length === 0 ?
                "No launches to show..."
                : <Loading />}
        </div>
    );
};

export default NoFavLaunchesToShow;