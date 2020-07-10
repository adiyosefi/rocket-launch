import { useEffect, useState } from 'react';
import axios from "axios";

export default function useLaunchSearch(query, pageNumber, favLaunchesFilterChecked, favoriteLaunchesList) {
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);
    const [launchesList, setLaunchesList] = useState([]);
    const [hasMore, setHasMore] = useState(false);

    const isInFavoriteLaunchesList = (launchId) => {
        for (let i = 0 ; i < favoriteLaunchesList.length ; i++){
            if (launchId === favoriteLaunchesList[i]){
                return true;
            }
        }
        return false;
    };

    // useEffect(() => {
    //     if (!favLaunchesFilterChecked) {
    //         setLaunchesList([])
    //     } else {
    //         let tempList = launchesList.filter(l => {
    //             if (isInFavoriteLaunchesList(l.id)){
    //                 return true;
    //             }
    //         });
    //         setLaunchesList(tempList)
    //     }
    // }, [favLaunchesFilterChecked])

    useEffect(() => {
        setLaunchesList([])
    }, [query])

    useEffect(() => {
        setLoading(true);
        setError(false);
        let cancel;
        axios({
            method: 'GET',
            url: `https://launchlibrary.net/1.4/launch/${query}?offset=${pageNumber}`,
            cancelToken: new axios.CancelToken(c => cancel = c)
        }).then(res => {
            console.log(res.data)
            setLaunchesList(prevLaunches => {
                return [...new Set([...prevLaunches, ...res.data.launches])]
            })
            setHasMore(res.data.launches.length > 0 && res.data.count === 10)
            setLoading(false);
        })
            .catch(error => {
                if (axios.isCancel(error)) return
                setError(true);
                console.log(error);
            });
        return () => cancel()
    }, [query, pageNumber]);

    return {loading, error, launchesList, setLaunchesList, hasMore}
};

