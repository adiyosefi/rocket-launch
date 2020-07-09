import React, {useEffect} from 'react';
import LaunchItem from "../LaunchItem/LaunchItem";
import InfiniteScroll from 'react-infinite-scroller';
import Loading from "../Loading/Loading";


const LaunchesToShow = ({launchesList, setLaunchesList}) => {
    const handleSubmitFavLaunches = (e) => {
        e.preventDefault();
        const filterLaunches = launchesList.filter(launch => {
            return launch.checked === true;
        });
        setLaunchesList(filterLaunches);
    }

    const showLaunchesList = launchesList.map((launch) =>
        <li key={launch.id} className="launch-item">
            <LaunchItem launch={launch} launchesList={launchesList}
                        setLaunchesList={setLaunchesList} />
        </li>
    );

    return (
        <div className="launches-list-container">
            <form onSubmit={e => handleSubmitFavLaunches(e)}>
                <ul className="launches-list">
                    {showLaunchesList}
                </ul>
            </form>
        </div>
    );
};

export default LaunchesToShow;