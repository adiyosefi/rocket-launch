import React, {useContext} from "react";
import { Link } from "react-router-dom";
import "./LaunchItem.scss";
import LaunchImage from "../common/LaunchImage";
import LaunchDate from "../common/LaunchDate";
import LaunchStatus from "../common/status/LaunchStatus";
import FavoriteButton from "../common/buttons/FavoriteButton";
import {LaunchesContext} from "../../context/launches";

const LaunchItem = ({ launch }) => {
    const { filteredFavoriteLaunchesList } = useContext(LaunchesContext);
    const {id,
        windowstart,
        windowend,
        rocket,
        name,
        status
    } = launch;

    return (
        <div className="container-per-launch">
            <LaunchImage imageURL={rocket.imageURL} name={rocket.name} imageSize={rocket.imageSizes[0]}/>
            <div className="launch-metadata-container">
                <div className="launch-name-container">
                    <Link to={`/${id}`} className="launch-link">
                        <h5>{name}</h5>
                    </Link>
                </div>
                <div className="launch-start-date-container">
                    <LaunchDate label="Start" date={windowstart}/>
                </div>
                <div className="launch-end-date-container">
                    <LaunchDate label="End" date={windowend}/>
                </div>
            </div>
            <LaunchStatus status={status}/>
            <FavoriteButton launch={launch}
                            favoriteLaunchesList={filteredFavoriteLaunchesList}/>
        </div>
    );
};

export default LaunchItem;