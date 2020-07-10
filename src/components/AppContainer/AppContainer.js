import React, {useCallback, useContext, useEffect, useRef, useState} from 'react';
import axios from 'axios';
import LaunchesList from "./../LaunchesList/LaunchesList";
import {LaunchesContext} from "../../context/launches";
import useLaunchSearch from './../../hooks/useLaunchSearch'
import {useLocalStorage} from "../../hooks/useLocalStorage";

const AppContainer = () => {

    // for infinite scrolling used this code- https://github.com/WebDevSimplified/React-Infinite-Scrolling
    const [query, setQuery] = useState('');
    const [pageNumber, setPageNumber] = useState(0);

    const [favLaunchesFilterChecked, setFavLaunchesFilterChecked] = useState(false);

    const [favoriteLaunchesList, setFavoriteLaunchesList] = useLocalStorage('favoriteLaunchesList', []);

    // const [launchesList, setLaunchesList] = useState([]);
    // const [showLaunchesListError, setShowLaunchesListError] = useState(null);
    // const [loading, setLoading] = useState(false);
    // const [page, setPage] = useState(0);
    //
    // const apiLaunchesURL = `https://launchlibrary.net/1.4/launch?offset=${page}?limit=10`;
    //
    // function getLaunches(page) {
    //     setLoading(true);
    //     axios.get(apiLaunchesURL)
    //         .then(res => {
    //             setLaunchesList([...launchesList, ...res.data.launches] );
    //             setLoading(false);
    //         })
    //         .catch(error => {
    //         console.log(error);
    //         setShowLaunchesListError("Error fetching launches");
    //         });
    // }
    //
    // useEffect(() => {
    //     getLaunches(page);
    // }, []);

    function handleInputChange(e) {
        setQuery(e.target.value);
    }

    function handleSearch(e) {
        setQuery(e.target.value);
    }

    const {
        launchesList,
        setLaunchesList,
        hasMore,
        loading,
        error
    } = useLaunchSearch(query, pageNumber, favLaunchesFilterChecked, favoriteLaunchesList);

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

    const isInFavoriteLaunchesList = (launchId) => {
        for (let i = 0 ; i < favoriteLaunchesList.length ; i++){
            if (launchId === favoriteLaunchesList[i]){
                return true;
            }
        }
        return false;
    };

    const showFavoriteLaunches = () => {
        let newListToShow = [];
        launchesList.map((l) => {
            if (isInFavoriteLaunchesList(l.id)){
                newListToShow.push(l);
            }
        })
        setLaunchesList(newListToShow);
    }

    let tempList = launchesList.filter(l => {
        if (isInFavoriteLaunchesList(l.id)){
            return true;
        }
    });

    const toggleChecked = () => {
        setFavLaunchesFilterChecked(!favLaunchesFilterChecked);
    }


    return (
        <div>
            <div className="app-title">
                <h1>Rocket Launch</h1>
            </div>
            <div>
                <div className="launches-search-container">
                    <input type="text" placeholder="Search launch..." value={query} onChange={e => handleInputChange(e)}></input>
                </div>
                <div className="launches-favorite-button-container">
                    <label htmlFor="checkbox-fav-launches"
                           className={`${favLaunchesFilterChecked ? 'fav-launches-filter-checked' : 'fav-launches-filter-unchecked'}`}>
                        <input type="checkbox" id="checkbox-fav-launches" onClick={() => toggleChecked()} />
                        {!favLaunchesFilterChecked ?
                            'Show favorite launches'
                            :
                            'Back to all launches'
                        }
                    </label>
                </div>
            </div>
            <div className="launches-list-container">
                <LaunchesList launchesList={launchesList} setLaunchesList={setLaunchesList} error={error}
                              loading={loading} lastLaunchElementRef={lastLaunchElementRef}
                              favoriteLaunchesList={favoriteLaunchesList} setFavoriteLaunchesList={setFavoriteLaunchesList}/>
            </div>
        </div>
    );
}

export default AppContainer;
