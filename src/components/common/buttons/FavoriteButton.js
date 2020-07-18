import React from 'react';
import RemoveFromFavoriteButton from "./RemoveFromFavoriteButton";
import AddToFavoriteButton from "./AddToFavoriteButton";
import '../../LaunchDetails/LaunchDetails.scss';

const checkIfFavorite = (launchId, favoriteLaunchesList) => favoriteLaunchesList.some(listItem => listItem.id === launchId)

const FavoriteButton = ({ launch, favoriteLaunchesList }) => (
    <div className="button-container">
        {checkIfFavorite(launch.id, favoriteLaunchesList) ? (
            <RemoveFromFavoriteButton
                launch={launch}
            />
        ) : (
            <AddToFavoriteButton
                launch={launch}
            />
        )}
    </div>
);

export default FavoriteButton;