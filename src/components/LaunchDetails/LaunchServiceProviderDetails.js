import React from "react";
import "./LaunchDetails.scss";

const LaunchServiceProviderDetails = ({ lsp }) => (
    <>
        <div className="lsp-container">
            <h3>Launch Service Provider</h3>
            <div className="lsp-name">
                <a href={lsp.infoURLs[0]} target="_blank" rel="noopener noreferrer">
                    {lsp.name}
                </a>
            </div>
        </div>
        <b className="hr"/>
    </>
);

export default LaunchServiceProviderDetails;
