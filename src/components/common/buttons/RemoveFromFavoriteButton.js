import React, { useCallback, useContext } from "react";
import "./Buttons.scss";
import Tooltip from "@material-ui/core/Tooltip";
import { LaunchesContext } from "../../../context/launches";

const RemoveFromFavoriteButton = ({ launch }) => {
    const { filteredFavoriteLaunchesList, setFavoriteLaunchesList } = useContext(LaunchesContext);

    const handleRemoveFromFavorites = useCallback(
        (launchId) => {
            const filterLaunches = filteredFavoriteLaunchesList.filter((launch) => {
                return launch.id !== launchId;
            });
            setFavoriteLaunchesList(filterLaunches);
        },
        [filteredFavoriteLaunchesList, setFavoriteLaunchesList]
    );

    return (
        <div>
            <Tooltip title="Remove from favorites" arrow>
                <button
                    className="remove-from-favorites-button"
                    onClick={() => {
                        handleRemoveFromFavorites(launch.id);
                    }}
                >
                    <i className="fa fa-star"/>
                </button>
            </Tooltip>
        </div>
    );
};

export default RemoveFromFavoriteButton;