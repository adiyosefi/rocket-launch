import React, {useCallback, useContext, useEffect, useRef, useState} from 'react';
import axios from 'axios';
import LaunchesList from "./../LaunchesList/LaunchesList";
import {LaunchesContext} from "../../context/launches";
import useLaunchSearch from './../../hooks/useLaunchSearch'
import {useLocalStorage} from "../../hooks/useLocalStorage";
import './AppContainer.scss';

const AppContainer = () => {

    const {launchesList,
        setLaunchesList,
        launchesListSearchResults,
        hasMore,
        hasMoreFavoriteLaunches,
        loading,
        loadingFavoriteLaunches,
        errorLaunches,
        errorFavoriteLaunches,
        favLaunchesSearchResults,
        setFavLaunchesSearchResults,
        query,
        setQuery,
        setPageNumber,
        favLaunchesFilterChecked,
        setFavLaunchesFilterChecked,
        favoriteLaunchesList,
        setFavoriteLaunchesList} = useContext(LaunchesContext);

    function handleInputChange(e) {
        setPageNumber(0)
        setQuery(e.target.value);
    }

    const observer = useRef()
    const lastLaunchElementRef = useCallback(node => {
        if (loading) return
        if (observer.current) observer.current.disconnect()
        observer.current = new IntersectionObserver(entries => {
            if (entries[0].isIntersecting && hasMore) {
                setPageNumber(prevPageNumber => prevPageNumber + 10)
            }
        })
        if (node) observer.current.observe(node)
    }, [loading, hasMore])

    const toggleChecked = () => {
        setFavLaunchesFilterChecked(!favLaunchesFilterChecked);
        setPageNumber(0)
    }

    return (
        <div className="app-container">
            <div className="background">
                <div className="app-title">
                    <h1>Rocket Launch</h1>
                </div>
                <div className="launches-filters-container">
                    <div className="launches-search-container">
                        <i className="fa fa-search"></i><input type="text" placeholder="Search launch..." value={query} onChange={e => handleInputChange(e)}></input>
                    </div>
                    <div className="launches-favorite-button-container">
                        <label htmlFor="checkbox-fav-launches"
                               className={`${favLaunchesFilterChecked ? 'fav-launches-filter-checked' : 'fav-launches-filter-unchecked'}`}>
                            <input type="checkbox" id="checkbox-fav-launches" onClick={() => toggleChecked()} />
                            {!favLaunchesFilterChecked ?
                                <span>Show Favorite Launches <i className="fa fa-star"></i></span>
                                :
                                <span><i className="fa fa-arrow-left"></i> Back to All Launches</span>
                            }
                        </label>
                    </div>
                </div>
            </div>
            <div className="app-content">
                <div className="app-secondary-title">
                    {!favLaunchesFilterChecked ?
                        <h2>All Launches</h2>
                        :
                        <h2>Favorite Launches</h2>
                    }
                </div>
                <div className="app-list-container">
                    <LaunchesList lastLaunchElementRef={lastLaunchElementRef} />
                </div>
            </div>
        </div>
    );
}

export default AppContainer;
