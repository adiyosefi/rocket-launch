import React, { useContext } from "react";
import LaunchItem from "../LaunchItem/LaunchItem";
import Loading from "../common/Loading";
import { LaunchesContext } from "../../context/launches";
import "./LaunchesList.scss";
import NoLaunchesToShow from "./NoLaunchesToShow";

const LaunchesToShow = ({ lastLaunchElementRef, launchesList }) => {
    const { loading } = useContext(LaunchesContext);

    const showLaunchesList = launchesList.map((launch, index) => {
        if (launchesList.length - 1 === index) {
            return (
                <li ref={lastLaunchElementRef} key={launch.id} className="launch-item">
                    <LaunchItem launch={launch} />
                </li>
            );
        } else {
            return (
                <li key={launch.id} className="launch-item">
                    <LaunchItem launch={launch} />
                </li>
            );
        }
    })

    return (
        <div className="launches-list-container">
            {showLaunchesList.length ?
                <ul className="launches-list">
                {showLaunchesList}
                {loading && <Loading />}
            </ul> : loading ? <Loading /> : <NoLaunchesToShow />}
        </div>
    );
};

export default LaunchesToShow;