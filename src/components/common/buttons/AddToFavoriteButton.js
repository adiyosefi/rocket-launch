import React, { useCallback, useContext } from "react";
import "./Buttons.scss";
import Tooltip from "@material-ui/core/Tooltip";
import { LaunchesContext } from "../../../context/launches";

const AddToFavoriteButton = ({ launch }) => {
    const { setFavoriteLaunchesList } = useContext(LaunchesContext);

    const handleAddToFavorites = useCallback(
        (launch) => {
            setFavoriteLaunchesList((prevLaunches) => {
                return [...new Set([...prevLaunches, launch])];
            });
        },
        [setFavoriteLaunchesList]
    );

    return (
        <div>
            <Tooltip title="Add to favorites" arrow>
                <button
                    className="add-to-favorites-button"
                    onClick={() => {
                        handleAddToFavorites(launch);
                    }}
                >
                    <i className="fa fa-star"/>
                </button>
            </Tooltip>
        </div>
    );
};

export default AddToFavoriteButton;