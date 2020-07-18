import React, {useContext, useState} from "react";
import LaunchItem from "../LaunchItem/LaunchItem";
import InfiniteScroll from "react-infinite-scroller";
import Loading from "../common/Loading";
import "./LaunchesList.scss";
import NoLaunchesToShow from "./NoLaunchesToShow";
import {LaunchesContext} from "../../context/launches";

const FavoriteLaunchesToShow = () => {
    const { filteredFavoriteLaunchesList } = useContext(LaunchesContext);
    const [pageCountToDisplay, setPageCountToDisplay] = useState(10);

    const [hasMore, setHasMore] = useState(filteredFavoriteLaunchesList.length > 10);

    const fetchMoreListItems = (pageToLoad) => {
        const futureCount = (pageToLoad + 1) * 10;
        if (futureCount <= filteredFavoriteLaunchesList.length) {
            setPageCountToDisplay(futureCount);
        } else {
            setPageCountToDisplay(filteredFavoriteLaunchesList.length);
            setHasMore(false);
        }
    }

    const showLaunchesList = filteredFavoriteLaunchesList
        .slice(0, pageCountToDisplay)
        .map(launch => <li key={launch.id} className={`launch-item launch-item-${launch.id}`}>
                <LaunchItem launch={launch} />
            </li>
        );

    if (!filteredFavoriteLaunchesList.length) return <NoLaunchesToShow />;

    return (
        <div className="launches-list-container">
            <ul className="launches-list">
                <InfiniteScroll
                    pageStart={0}
                    loadMore={fetchMoreListItems}
                    hasMore={hasMore}
                    loader={<Loading key={0}/>}
                >
                    {showLaunchesList}
                </InfiniteScroll>
            </ul>
        </div>
    );
};

export default FavoriteLaunchesToShow;