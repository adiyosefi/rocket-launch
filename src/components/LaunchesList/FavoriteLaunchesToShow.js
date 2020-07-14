import React, {useState} from 'react';
import LaunchItem from "../LaunchItem/LaunchItem";
import InfiniteScroll from 'react-infinite-scroller';
import Loading from "../Loading/Loading";
import './LaunchesList.scss'

const FavoriteLaunchesToShow = ({ favoriteLaunchesList }) => {
    const [pageCountToDisplay, setPageCountToDisplay] = useState(10);

    const [hasMore, setHasMore] = useState(favoriteLaunchesList.length > 10);

    function fetchMoreListItems(pageToLoad) {
        const futureCount = (pageToLoad+1)*10;
        if (futureCount <= favoriteLaunchesList.length) {
            setPageCountToDisplay(futureCount);
        } else {
            setPageCountToDisplay(favoriteLaunchesList.length);
            setHasMore(false);
        }
    }

    const showLaunchesList = favoriteLaunchesList.slice(0,pageCountToDisplay).map((launch) => {
        return (
            <li key={launch.id} className={`launch-item launch-item-${launch.id}`}>
                <LaunchItem launch={launch}
                            favoriteLaunchesList={favoriteLaunchesList} />
            </li>
        );
    });

    return (
        <div className="launches-list-container">
            <ul className="launches-list">
                <InfiniteScroll
                    pageStart={0}
                    loadMore={fetchMoreListItems}
                    hasMore={hasMore}
                    loader={<Loading />}>
                    {showLaunchesList}
                </InfiniteScroll>
            </ul>
        </div>
    );
};

export default FavoriteLaunchesToShow;