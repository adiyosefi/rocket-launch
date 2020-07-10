import React, {useContext} from 'react';
import LaunchesToShow from "./LaunchesToShow";
import NoLaunchesToShow from "./NoLaunchesToShow";
import {LaunchesContext} from "../../context/launches";

const LaunchesList = ({launchesList, setLaunchesList, error, loading, lastLaunchElementRef,
                          favoriteLaunchesList, setFavoriteLaunchesList}) => {

    return (
        <div className="launches-content-container">
            {launchesList.length !== 0 ?
                <LaunchesToShow launchesList={launchesList} setLaunchesList={setLaunchesList} loading={loading}
                                lastLaunchElementRef={lastLaunchElementRef}
                                favoriteLaunchesList={favoriteLaunchesList} setFavoriteLaunchesList={setFavoriteLaunchesList}/>
                : <NoLaunchesToShow error={error} />}
        </div>
    );
};

export default LaunchesList;