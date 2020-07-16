import React from 'react';
import './AppContainer.scss';

const FavoriteLaunchesFilter = ({ favLaunchesFilterChecked, toggleChecked }) => (
    <div className="launches-favorite-button-container">
        <label
            htmlFor="checkbox-fav-launches"
            className={`${
                favLaunchesFilterChecked
                    ? "fav-launches-filter-checked"
                    : "fav-launches-filter-unchecked"
            }`}
        >
            <input
                type="checkbox"
                id="checkbox-fav-launches"
                onClick={toggleChecked}
            />
            {!favLaunchesFilterChecked ? (
                <span>
                  Show Favorite Launches <i className="fa fa-star"/>
                </span>
            ) : (
                <span>
                  <i className="fa fa-arrow-left"/> Back to All Launches
                </span>
            )}
        </label>
    </div>
);

export default FavoriteLaunchesFilter;