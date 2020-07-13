import React, {useContext, useEffect, useRef, useState} from 'react';
import LaunchItem from "../LaunchItem/LaunchItem";
import InfiniteScroll from 'react-infinite-scroller';
import Loading from "../Loading/Loading";
import './LaunchesList.scss'
import useInfiniteScroll from "../../hooks/useInfiniteScroll";
import {LaunchesContext} from "../../context/launches";


const FavoriteLaunchesToShow = ({ favoriteLaunchesList }) => {

    const { hasMoreFavoriteLaunches,
        loading,
        loadingFavoriteLaunches,
        favLaunchesSearchResults,
        setFavLaunchesSearchResults,
        setFavoriteLaunchesList} = useContext(LaunchesContext);

    //
    // function fetchMoreListItems(pageToLoad) {
    //     if (pageToLoad < favoriteLaunchesList.length) {
    //         setFavoriteLaunchesList(prevState => [...prevState, ...favoriteLaunchesList.slice(pageToLoad, pageToLoad + 1)])
    //         pageToLoad = pageToLoad+1
    //     }
    // }


    const showLaunchesList = favoriteLaunchesList.map((launch) => {
        return (
            <li key={launch.id} className="launch-item">
                <LaunchItem launch={launch}
                            favoriteLaunchesList={favoriteLaunchesList} />
            </li>
        );
    });

    return (
        <div className="launches-list-container">
            <ul className="launches-list">
                {/*<InfiniteScroll*/}
                {/*    pageStart={0}*/}
                {/*    loadMore={fetchMoreListItems}*/}
                {/*    hasMore={hasMoreFavoriteLaunches}*/}
                {/*    loader={<Loading />}>*/}
                    {showLaunchesList}
                {/*</InfiniteScroll>*/}
            </ul>
        </div>
    );
};

export default FavoriteLaunchesToShow;