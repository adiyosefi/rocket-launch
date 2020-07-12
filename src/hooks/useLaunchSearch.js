import { useEffect, useState } from 'react';
import axios from "axios";

export default function useLaunchSearch(query, pageNumber, setPageNumber, favLaunchesFilterChecked, favoriteLaunchesList, setFavoriteLaunchesList) {
    const [loading, setLoading] = useState(true);
    const [loadingFavoriteLaunches, setLoadingFavoriteLaunches] = useState(true);
    const [errorLaunches, setErrorLaunches] = useState(false);
    const [errorFavoriteLaunches, setErrorFavoriteLaunches] = useState(false);
    const [launchesList, setLaunchesList] = useState([]);
    const [launchesListSearchResults, setLaunchesListSearchResults] = useState([]);
    const [hasMore, setHasMore] = useState(false);
    const [hasMoreFavoriteLaunches, setHasMoreFavoriteLaunches] = useState(false);
    const [favLaunchesSearchResults, setFavLaunchesSearchResults] = useState([]);

    useEffect(() => {
        if (!favLaunchesFilterChecked) {
            setLaunchesList([])
            setLaunchesListSearchResults([])
        } else if (favLaunchesFilterChecked) {
            setFavLaunchesSearchResults([])
        }
    }, [query, favLaunchesFilterChecked])

    useEffect(() => {
        if (favLaunchesFilterChecked) {
            setFavLaunchesSearchResults(favLaunchesSearchResults)
            setFavoriteLaunchesList(favoriteLaunchesList)
        }
    }, [favLaunchesFilterChecked, favoriteLaunchesList, favLaunchesSearchResults])


    useEffect(() => {
        if (!favLaunchesFilterChecked) {
            let url = query ? `https://launchlibrary.net/1.4/launch/${query}?offset=${pageNumber}` : `https://launchlibrary.net/1.4/launch/?offset=${pageNumber}`
            setLoading(true);
            setErrorLaunches(false);
            let cancel;
            axios({
                method: 'GET',
                url: url,
                cancelToken: new axios.CancelToken(c => cancel = c)
            }).then(res => {
                console.log(res.data)
                if (query.length > 0) {
                    setLaunchesListSearchResults(prevLaunches => {
                        return [...new Set([...prevLaunches, ...res.data.launches])]
                    })
                } else {
                    setLaunchesList(prevLaunches => {
                        return [...new Set([...prevLaunches, ...res.data.launches])]
                    })
                }
                setHasMore(res.data.launches.length > 0 && res.data.count === 10)
                setLoading(false);
            })
                .catch(errorLaunches => {
                    if (axios.isCancel(errorLaunches)) return
                    setErrorLaunches(true);
                    console.log(errorLaunches);
                });
            return () => cancel()
        }
    }, [query, pageNumber, favLaunchesFilterChecked]);

    useEffect(() => {
        if (favLaunchesFilterChecked) {
            try {
                setPageNumber(0);
                setLoadingFavoriteLaunches(true);
                setErrorFavoriteLaunches(false);
                if (query.length > 0) {
                    setFavLaunchesSearchResults(favoriteLaunchesList.filter((launch) => {
                        return launch.name.toLowerCase().includes(query);
                    }))
                    setHasMoreFavoriteLaunches(favLaunchesSearchResults.length > 0)
                    setLoadingFavoriteLaunches(false);
                    if (favLaunchesSearchResults.length === 0){
                        setErrorFavoriteLaunches(true);
                    }
                } else {
                    setFavoriteLaunchesList(favoriteLaunchesList);
                    setHasMoreFavoriteLaunches(favoriteLaunchesList.length > 0)
                    setLoadingFavoriteLaunches(false);
                    if (favoriteLaunchesList.length === 0){
                        setErrorFavoriteLaunches(true);
                    }
                }
                console.log("favLaunchesSearchResults", favLaunchesSearchResults)
            } catch (errorFavoriteLaunches) {
                setErrorFavoriteLaunches(true);
                console.log(errorFavoriteLaunches);
            }
        }
    }, [query, favLaunchesFilterChecked])

    return {loading, loadingFavoriteLaunches, errorLaunches, errorFavoriteLaunches, launchesList, setLaunchesList,
        launchesListSearchResults, hasMore, hasMoreFavoriteLaunches, favLaunchesSearchResults, setFavLaunchesSearchResults}
};

