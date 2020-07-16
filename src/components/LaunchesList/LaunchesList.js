import React, { useContext } from "react";
import LaunchesToShow from "./LaunchesToShow";
import NoLaunchesToShow from "./NoLaunchesToShow";
import { LaunchesContext } from "../../context/launches";
import FavoriteLaunchesToShow from "./FavoriteLaunchesToShow";
import NoFavLaunchesToShow from "./NoFavLaunchesToShow";

const LaunchesList = ({ lastLaunchElementRef }) => {
    const {
        launchesList,
        launchesListSearchResults,
        favLaunchesSearchResults,
        query,
        favLaunchesFilterChecked,
        favoriteLaunchesList,
    } = useContext(LaunchesContext);

    const listToUse =
        query && query.length > 0 ? launchesListSearchResults : launchesList;

    const favListToUse =
        query && query.length > 0 ? favLaunchesSearchResults : favoriteLaunchesList;

    return (
        <div className="launches-content-container">
            {(listToUse && listToUse.length) !== 0 && !favLaunchesFilterChecked ? (
                <LaunchesToShow
                    launchesList={listToUse}
                    lastLaunchElementRef={lastLaunchElementRef}
                />
            ) : favListToUse &&
            favListToUse.length !== 0 &&
            favLaunchesFilterChecked ? (
                <FavoriteLaunchesToShow favoriteLaunchesList={favListToUse} />
            ) : (listToUse && listToUse.length) === 0 && !favLaunchesFilterChecked ? (
                <NoLaunchesToShow launchesList={listToUse} />
            ) : (favListToUse && favListToUse.length) === 0 &&
            favLaunchesFilterChecked ? (
                <NoFavLaunchesToShow favoriteLaunchesList={favListToUse} />
            ) : null}
        </div>
    );
};

export default LaunchesList;