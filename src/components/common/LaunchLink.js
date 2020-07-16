import React from 'react';

const LaunchLink = ({ href, title }) => (
    <a href={href} target="_blank" rel="noopener noreferrer">
        {title}
    </a>
);

export default LaunchLink;