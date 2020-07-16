import React, {useCallback, useContext, useRef} from 'react';
import LaunchesList from "./../LaunchesList/LaunchesList";
import {LaunchesContext} from "../../context/launches";
import './AppContainer.scss';
import LaunchSearchInput from "./LaunchSearchInput";
import FavoriteLaunchesFilter from "./FavoriteLaunchesFilter";

const AppContainer = () => {
    const {
        hasMore,
        loading,
        query,
        setQuery,
        setPageNumber,
        favLaunchesFilterChecked,
        setFavLaunchesFilterChecked,
    } = useContext(LaunchesContext);

    const handleInputChange = useCallback(e => {
        setPageNumber(0)
        setQuery(e.target.value);
    }, [setPageNumber, setQuery]);

    // infinite scrolling in launches list inspired by this code- https://github.com/WebDevSimplified/React-Infinite-Scrolling

    // The observer is to asynchronously observe changes in the intersection of
    // a target element with an ancestor element or with a top-level document's viewport.
    // The observer will keep observing changes until reaching the end of the list.
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
    }, [loading, hasMore, setPageNumber])


    const toggleChecked = useCallback(() => {
        setFavLaunchesFilterChecked(!favLaunchesFilterChecked);
        setPageNumber(0);
        setQuery("");
    }, [favLaunchesFilterChecked,
        setFavLaunchesFilterChecked,
        setPageNumber,
        setQuery
    ]);

    return (
        <div className="app-container">
            <div className="background">
                <div className="app-title">
                    <h1>Rocket Launch</h1>
                </div>
                <div className="launches-filters-container">
                    <LaunchSearchInput query={query} handleInputChange={handleInputChange}/>
                    <FavoriteLaunchesFilter favLaunchesFilterChecked={favLaunchesFilterChecked}
                                                  toggleChecked={toggleChecked}/>
                </div>
            </div>
            <div className="app-content">
                <div className="app-secondary-title">
                    {!favLaunchesFilterChecked ? (
                        <h2>All Launches</h2>
                    ) : (
                        <h2>Favorite Launches</h2>
                    )}
                </div>
                <div className="app-list-container">
                    <LaunchesList lastLaunchElementRef={lastLaunchElementRef} />
                </div>
            </div>
        </div>
    );
}

export default AppContainer;
