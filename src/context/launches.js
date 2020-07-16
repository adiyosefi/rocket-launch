import React, { createContext, useState } from "react";
import { useLocalStorage } from "../hooks/useLocalStorage";
import useLaunchSearch from "../hooks/useLaunchSearch";

export const LaunchesContext = createContext({});

export const LaunchesProvider = ({ children }) => {
    const [query, setQuery] = useState("");
    const [pageNumber, setPageNumber] = useState(0);

    const [favLaunchesFilterChecked, setFavLaunchesFilterChecked] = useState(
        false
    );

    const [favoriteLaunchesList, setFavoriteLaunchesList] = useLocalStorage(
        "favoriteLaunchesList",
        []
    );

    const {
        launchesList,
        setLaunchesList,
        launchesListSearchResults,
        hasMore,
        loading,
        errorLaunches,
        errorFavoriteLaunches,
        filteredFavoriteLaunchesList
    } = useLaunchSearch(
        query,
        pageNumber,
        setPageNumber,
        favLaunchesFilterChecked,
        favoriteLaunchesList,
        setFavoriteLaunchesList
    );

    return (
        <LaunchesContext.Provider
            value={{
                launchesList,
                setLaunchesList,
                launchesListSearchResults,
                hasMore,
                loading,
                errorLaunches,
                errorFavoriteLaunches,
                query,
                setQuery,
                pageNumber,
                setPageNumber,
                favLaunchesFilterChecked,
                setFavLaunchesFilterChecked,
                favoriteLaunchesList,
                setFavoriteLaunchesList,
                filteredFavoriteLaunchesList
            }}
        >
            {children}
        </LaunchesContext.Provider>
    );
};