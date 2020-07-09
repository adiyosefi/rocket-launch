import React from 'react';

const LaunchServiceProviderDetails = ({lsp}) => {
    return (
        <div>
            <h3>Launch Service Provider</h3>
            <div className="lsp-name">
                <a href={lsp.infoURLs[0]} target='_blank' rel="noopener noreferrer">{lsp.name}</a>
            </div>
        </div>
    );
};

export default LaunchServiceProviderDetails;