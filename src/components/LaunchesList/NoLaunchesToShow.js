import React, {useContext} from 'react';
import Loading from "../Loading/Loading";
import './LaunchesList.scss'
import {LaunchesContext} from "../../context/launches";

const NoLaunchesToShow = ({ launchesList }) => {
    const {errorLaunches} = useContext(LaunchesContext);

    return (
        <div className="no-launches-content">
        {errorLaunches && launchesList.length === 0 ?
                "No launches to show..."
                : <Loading />}
        </div>
    );
};

export default NoLaunchesToShow;