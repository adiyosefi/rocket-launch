import React, {useContext} from 'react';
import LaunchItem from "../LaunchItem/LaunchItem";
import Loading from "../Loading/Loading";
import {LaunchesContext} from "../../context/launches";
import './LaunchesList.scss'

const LaunchesToShow = ({ lastLaunchElementRef, launchesList }) => {

    const {loading,
        favoriteLaunchesList} = useContext(LaunchesContext);

    console.log("favoriteLaunchesList", favoriteLaunchesList);

    const showLaunchesList = launchesList.map((launch, index) => {
        if (launchesList.length-1 === index){
            return (
                <li ref={lastLaunchElementRef} key={launch.id} className="launch-item">
                    <LaunchItem launch={launch}
                                favoriteLaunchesList={favoriteLaunchesList} />
                </li>
            );
        } else {
            return (
                <li key={launch.id} className="launch-item">
                    <LaunchItem launch={launch}
                                favoriteLaunchesList={favoriteLaunchesList} />
                </li>
            );
        }
    });

    return (
        <div className="launches-list-container">
            <ul className="launches-list">
                {showLaunchesList}
                {loading && <Loading />}
            </ul>
        </div>
    );
};

export default LaunchesToShow;