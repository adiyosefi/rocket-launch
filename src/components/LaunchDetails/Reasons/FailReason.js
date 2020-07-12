import React from 'react';

const FailReason = ({ failreason }) => {
    return (
        <div className="launch-fail-reason">
            <span>Fail reason:</span> {failreason}
        </div>
    );
};

export default FailReason;