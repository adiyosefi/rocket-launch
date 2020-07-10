import React, { useEffect, useState, createContext } from "react";
import axios from "axios";

export const LaunchesContext = createContext({});

export const LaunchesProvider = ({ children }) => {
    const [responseObject, setResponseObject] = useState({});
    const [launchesList, setLaunchesList] = useState([]);
    const [showLaunchesListError, setShowLaunchesListError] = useState(null);
    const [loading, setLoading] = useState(false);
    const [page, setPage] = useState(0);


    function getLaunches(page) {
        const apiLaunchesURL = `https://launchlibrary.net/1.4/launch?offset=${page}?limit=-1`;

        setLoading(true);
        axios.get(apiLaunchesURL)
            .then(res => {
                setLaunchesList([...launchesList, ...res.data.launches] );
                setResponseObject(res.data);
                setPage(res.data.offset);
                console.log(res.data)
                setLoading(false);
            })
            .catch(error => {
                console.log(error);
                setShowLaunchesListError("Error fetching launches");
                setLoading(false);
            });
    }

    useEffect(() => {
        getLaunches(page);
    }, []);

    return (
        <LaunchesContext.Provider
            value={{
                responseObject, setResponseObject, launchesList, setLaunchesList, showLaunchesListError, setShowLaunchesListError,
                loading, setLoading, page, setPage, getLaunches
            }}
        >
            {children}
        </LaunchesContext.Provider>
    );
};
