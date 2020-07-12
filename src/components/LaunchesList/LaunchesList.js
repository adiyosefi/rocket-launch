import React, {useContext, useEffect} from 'react';
import LaunchesToShow from "./LaunchesToShow";
import NoLaunchesToShow from "./NoLaunchesToShow";
import {LaunchesContext} from "../../context/launches";
import FavoriteLaunchesToShow from "./FavoriteLaunchesToShow";
import NoFavLaunchesToShow from "./NoFavLaunchesToShow";

const LaunchesList = ({launchesList, setLaunchesList, errorLaunches, launchesListSearchResults, loading, lastLaunchElementRef,
                          favoriteLaunchesList, setFavoriteLaunchesList, favLaunchesFilterChecked, hasMoreFavoriteLaunches,
                          favLaunchesSearchResults, setFavLaunchesSearchResults, errorFavoriteLaunches,
                          query, loadingFavoriteLaunches }) => {

    const isInFavoriteLaunchesList = (launchId) => {
        for (let i = 0 ; i < favoriteLaunchesList.length ; i++){
            if (launchId === favoriteLaunchesList[i]){
                return true;
            }
        }
        return false;
    };

    const listToUse = query.length > 0 ? launchesListSearchResults : launchesList;

    const favListToUse = query.length > 0 ? favLaunchesSearchResults : favoriteLaunchesList;

    return (
        <div className="launches-content-container">
            {listToUse.length !== 0 && !favLaunchesFilterChecked ?
                <LaunchesToShow launchesList={listToUse} setLaunchesList={setLaunchesList} loading={loading}
                                lastLaunchElementRef={lastLaunchElementRef}
                                favoriteLaunchesList={favoriteLaunchesList} setFavoriteLaunchesList={setFavoriteLaunchesList}/>
                : favListToUse.length !== 0 && favLaunchesFilterChecked  ?
                    <FavoriteLaunchesToShow favoriteLaunchesList={favListToUse} loading={loadingFavoriteLaunches}
                                            setFavoriteLaunchesList={setFavoriteLaunchesList} hasMoreFavoriteLaunches={hasMoreFavoriteLaunches}
                                            favLaunchesSearchResults={favLaunchesSearchResults}
                                            setFavLaunchesSearchResults={setFavLaunchesSearchResults} />
                    : listToUse.length === 0 && !favLaunchesFilterChecked ?
                <NoLaunchesToShow errorLaunches={errorLaunches} launchesList={listToUse}/>
                :  favListToUse.length === 0 && favLaunchesFilterChecked ?
                            <NoFavLaunchesToShow errorFavoriteLaunches={errorFavoriteLaunches}
                                              favoriteLaunchesList={favListToUse}
                                              favLaunchesSearchResults={favLaunchesSearchResults} />
                : null}
        </div>
    );
};

export default LaunchesList;