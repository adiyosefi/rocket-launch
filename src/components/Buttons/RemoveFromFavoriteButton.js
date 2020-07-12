import React, {useCallback, useEffect} from 'react';
import './Buttons.scss'
import Tooltip from "@material-ui/core/Tooltip";

const RemoveFromFavoriteButton = ({launch, favoriteLaunchesList, setFavoriteLaunchesList}) => {

    const handleRemoveFromFavorites = useCallback(launchId => {
        const filterLaunches = favoriteLaunchesList.filter(launch => {
            return launch.id !== launchId;
        });
        setFavoriteLaunchesList(filterLaunches);
    }, [favoriteLaunchesList]);

    return (
        <div>
            <Tooltip title="Remove from favorites" arrow>
                <button className="remove-from-favorites-button" onClick={() => {handleRemoveFromFavorites(launch.id)}}>
                    <i className="fa fa-star"></i>
                </button>
            </Tooltip>
        </div>
    );
};

export default RemoveFromFavoriteButton;