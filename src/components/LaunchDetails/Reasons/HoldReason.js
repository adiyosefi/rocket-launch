import React from 'react';

const HoldReason = ({ holdreason }) => {
    return (
        <div className="launch-hold-reason">
            <span>Hold reason:</span> {holdreason}
        </div>
    );
};

export default HoldReason;