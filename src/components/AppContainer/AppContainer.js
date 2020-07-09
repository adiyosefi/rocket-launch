import React, {useEffect, useState} from 'react';
import axios from 'axios';
import './AppContainer.scss';
import LaunchesList from "./../LaunchesList/LaunchesList";

const AppContainer = () => {
    const [launchesList, setLaunchesList] = useState([]);
    const [showLaunchesListError, setShowLaunchesListError] = useState(null);
    const [loading, setLoading] = useState(false);
    const [page, setPage] = useState(0);

    const apiLaunchesURL = `https://launchlibrary.net/1.4/launch?offset=${page}?limit=10`;

    function getLaunches(page) {
        setLoading(true);
        axios.get(apiLaunchesURL)
            .then(res => {
                setLaunchesList([...launchesList, ...res.data.launches] );
                setLoading(false);
            })
            .catch(error => {
            console.log(error);
            setShowLaunchesListError("Error fetching launches");
            });
    }

    useEffect(() => {
        getLaunches(page);
    }, []);

    return (
        <div className="App">
            <div className="app-title">
                <h1>Rocket Launch</h1>
            </div>
            <div className="launches-list-container">
                <LaunchesList launchesList={launchesList} setLaunchesList={setLaunchesList}
                              showLaunchesListError={showLaunchesListError} />
            </div>
        </div>
    );
}

export default AppContainer;
