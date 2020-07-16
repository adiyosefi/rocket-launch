import {useEffect, useMemo, useState} from 'react';
import axios from "axios";

export default function useLaunchSearch(
    query,
    pageNumber,
    setPageNumber,
    favLaunchesFilterChecked,
    favoriteLaunchesList,
    setFavoriteLaunchesList
) {
    // infinite scrolling in launches list inspired by this code- https://github.com/WebDevSimplified/React-Infinite-Scrolling
    const [loading, setLoading] = useState(true);
    const [errorLaunches, setErrorLaunches] = useState(false);
    const [errorFavoriteLaunches, setErrorFavoriteLaunches] = useState(false);
    const [launchesList, setLaunchesList] = useState([]);
    const [launchesListSearchResults, setLaunchesListSearchResults] = useState(
        []
    );
    const [hasMore, setHasMore] = useState(false);
    const [favLaunchesSearchResults, setFavLaunchesSearchResults] = useState([]);

    useEffect(() => {
        if (!favLaunchesFilterChecked) {
            setLaunchesList([])
            setLaunchesListSearchResults([])
        }
    }, [query, favLaunchesFilterChecked]);

    useEffect(() => {
        if (favLaunchesFilterChecked) {
            setFavLaunchesSearchResults(favLaunchesSearchResults)
            setFavoriteLaunchesList(favoriteLaunchesList)
        }
    }, [
        favLaunchesFilterChecked,
        favoriteLaunchesList,
        setFavoriteLaunchesList,
        favLaunchesSearchResults
    ]);

    useEffect(() => {
        if (!favLaunchesFilterChecked) {
            let url = query
                ? `https://launchlibrary.net/1.4/launch/${query}?offset=${pageNumber}`
                : `https://launchlibrary.net/1.4/launch/?offset=${pageNumber}`;
            setLoading(true);
            setErrorLaunches(false);
            let cancel;
            axios({
                method: "GET",
                url: url,
                cancelToken: new axios.CancelToken((c) => (cancel = c)),
            })
                .then((res) => {
                    if (query.length > 0) {
                        setLaunchesListSearchResults((prevLaunches) => {
                            return [...new Set([...prevLaunches, ...res.data.launches])];
                        });
                    } else {
                        setLaunchesList((prevLaunches) => {
                            return [...new Set([...prevLaunches, ...res.data.launches])];
                        });
                    }
                    setHasMore(res.data.launches.length > 0 && res.data.count === 10);
                    setLoading(false);
                })
                .catch((errorLaunches) => {
                    if (axios.isCancel(errorLaunches)) return;
                    setErrorLaunches(true);
                });
            return () => cancel();
        }
    }, [query, pageNumber, favLaunchesFilterChecked]);

    const filteredFavoriteLaunchesList = useMemo(() => (
        favoriteLaunchesList.filter((launch) =>
            launch.name.toLowerCase().includes(query)
        )
    ),[favoriteLaunchesList, query])

    return {
        loading,
        errorLaunches,
        errorFavoriteLaunches,
        launchesList,
        setLaunchesList,
        filteredFavoriteLaunchesList,
        launchesListSearchResults,
        hasMore,
        favLaunchesSearchResults,
    };
};

