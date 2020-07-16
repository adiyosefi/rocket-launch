import React from 'react';
import './AppContainer.scss';

const LaunchSearchInput = ({ query, handleInputChange }) => (
    <div className="launches-search-container">
        <i className="fa fa-search"/>
        <input
            type="text"
            placeholder="Search launch..."
            value={query}
            onChange={handleInputChange}
        />
    </div>
);

export default LaunchSearchInput;