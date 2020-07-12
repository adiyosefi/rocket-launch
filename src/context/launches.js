import React, { useEffect, useState, createContext } from "react";
import axios from "axios";
import {useLocalStorage} from "../hooks/useLocalStorage";
import useLaunchSearch from "../hooks/useLaunchSearch";

export const LaunchesContext = createContext({});

export const LaunchesProvider = ({ children }) => {
    // for infinite scrolling used this code- https://github.com/WebDevSimplified/React-Infinite-Scrolling
    const [query, setQuery] = useState('');
    const [pageNumber, setPageNumber] = useState(0);

    const [favLaunchesFilterChecked, setFavLaunchesFilterChecked] = useState(false);

    const [favoriteLaunchesList, setFavoriteLaunchesList] = useLocalStorage('favoriteLaunchesList', []);

    const {
        launchesList,
        setLaunchesList,
        launchesListSearchResults,
        hasMore,
        hasMoreFavoriteLaunches,
        loading,
        loadingFavoriteLaunches,
        errorLaunches,
        errorFavoriteLaunches,
        favLaunchesSearchResults,
        setFavLaunchesSearchResults
    } = useLaunchSearch(query, pageNumber, setPageNumber, favLaunchesFilterChecked, favoriteLaunchesList, setFavoriteLaunchesList);


    return (
        <LaunchesContext.Provider
            value={{
                launchesList,
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
                pageNumber,
                setPageNumber,
                favLaunchesFilterChecked,
                setFavLaunchesFilterChecked,
                favoriteLaunchesList,
                setFavoriteLaunchesList
            }}
        >
            {children}
        </LaunchesContext.Provider>
    );
};
