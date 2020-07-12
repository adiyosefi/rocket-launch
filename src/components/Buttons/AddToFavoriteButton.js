import React, {useCallback} from 'react';
import './Buttons.scss'
import Tooltip from "@material-ui/core/Tooltip";

const AddToFavoriteButton = ({launch, favoriteLaunchesList, setFavoriteLaunchesList}) => {

    const handleAddToFavorites = useCallback(launch => {
        setFavoriteLaunchesList(prevLaunches => {
            return [...new Set([...prevLaunches, launch])]
        })
    }, [favoriteLaunchesList]);

    return (
        <div>
            <Tooltip title="Add to favorites" arrow>
                <button className="add-to-favorites-button" onClick={() => {handleAddToFavorites(launch)}}>
                    <i className="fa fa-star"></i>
                </button>
            </Tooltip>
        </div>
    );
};

export default AddToFavoriteButton;