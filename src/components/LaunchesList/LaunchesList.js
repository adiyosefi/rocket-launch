import React, {useContext} from "react";
import LaunchesToShow from "./LaunchesToShow";
import { LaunchesContext } from "../../context/launches";
import FavoriteLaunchesToShow from "./FavoriteLaunchesToShow";

const LaunchesList = ({ lastLaunchElementRef }) => {
    const {
        launchesList,
        launchesListSearchResults,
        query,
        favLaunchesFilterChecked
    } = useContext(LaunchesContext);

    const listToUse =
        query ? launchesListSearchResults : launchesList;

    return (
        <div className="launches-content-container">
            {!favLaunchesFilterChecked ?
                <LaunchesToShow
                    launchesList={listToUse}
                    lastLaunchElementRef={lastLaunchElementRef}
                />
                :
                <FavoriteLaunchesToShow />
            }
        </div>
    );
};

export default LaunchesList;