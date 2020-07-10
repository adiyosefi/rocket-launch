import React, {useCallback} from 'react';

const RemoveFromFavoriteButton = ({launch, favoriteLaunchesList, setFavoriteLaunchesList, launchesList, setLaunchesList}) => {
    const handleRemoveFromFavorites = useCallback(launchId => {
        const filterLaunches = favoriteLaunchesList.filter(id => {
            return id !== launchId;
        });
        setFavoriteLaunchesList(filterLaunches);
        console.log("favoriteLaunchesList", favoriteLaunchesList);
    }, [setFavoriteLaunchesList]);

    return (
        <div>
            <button className="remove-from-favorites-button" onClick={() => {handleRemoveFromFavorites(launch.id)}}>
                Remove from favorites</button>
        </div>
    );
};

export default RemoveFromFavoriteButton;