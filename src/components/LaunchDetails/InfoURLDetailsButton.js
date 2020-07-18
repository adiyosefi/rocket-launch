import React from "react";
import "./LaunchDetails.scss";

const InfoURLDetailsButton = ({ infoURL }) => (
    <div className="infoURL-container">
        <a href={infoURL} target="_blank" rel="noopener noreferrer">
            <button>
                For more information click here &nbsp;
                <i className="fa fa-external-link"/>
            </button>
        </a>
    </div>
);

export default InfoURLDetailsButton;