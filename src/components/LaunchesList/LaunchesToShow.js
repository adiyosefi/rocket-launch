import React, {useContext, useEffect, useRef} from 'react';
import LaunchItem from "../LaunchItem/LaunchItem";
import InfiniteScroll from 'react-infinite-scroller';
import Loading from "../Loading/Loading";
import {LaunchesContext} from "../../context/launches";
import axios from "axios";
import {useLocalStorage} from "../../hooks/useLocalStorage";


const LaunchesToShow = ({launchesList, setLaunchesList, loading, lastLaunchElementRef,
                            favoriteLaunchesList, setFavoriteLaunchesList}) => {


    console.log("favoriteLaunchesList", favoriteLaunchesList);

    const showLaunchesList = launchesList.map((launch, index) => {
        if (launchesList.length-1 === index){
            return (
                <li ref={lastLaunchElementRef} key={launch.id} className="launch-item">
                    <LaunchItem launch={launch}
                                favoriteLaunchesList={favoriteLaunchesList}
                                setFavoriteLaunchesList={setFavoriteLaunchesList}
                                launchesList={launchesList}
                                setLaunchesList={setLaunchesList} />
                </li>
            );
        } else {
            return (
                <li key={launch.id} className="launch-item">
                    <LaunchItem launch={launch}
                                favoriteLaunchesList={favoriteLaunchesList}
                                setFavoriteLaunchesList={setFavoriteLaunchesList}
                                launchesList={launchesList}
                                setLaunchesList={setLaunchesList} />
                </li>
            );
        }
    });

    return (
        <div className="launches-list-container">
            {/*<form onSubmit={e => handleSubmitFavLaunches(e)}>*/}
                <ul className="launches-list">
                    {showLaunchesList}
                    {loading && <Loading />}
                </ul>
            {/*</form>*/}
        </div>
    );
};

export default LaunchesToShow;