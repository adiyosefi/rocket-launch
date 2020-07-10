import React, {useCallback} from 'react';

const AddToFavoriteButton = ({launch, favoriteLaunchesList, setFavoriteLaunchesList, launchesList, setLaunchesList}) => {
    const handleAddToFavorites = useCallback(launchId => {
        setFavoriteLaunchesList(prevLaunches => {
            return [...new Set([...prevLaunches, launchId])]
        })
        console.log("favoriteLaunchesList", favoriteLaunchesList);
    }, [setFavoriteLaunchesList]);

    return (
        <div>
            <button className="add-to-favorites-button" onClick={() => {handleAddToFavorites(launch.id)}}>
                Add to favorites</button>
        </div>
    );
};

export default AddToFavoriteButton;