import React from 'react';

const PayloadItem = ({ name }) => {
    return (
        <div>
            <div className="payload-name">
                {name}
            </div>
        </div>
    );
};

export default PayloadItem;