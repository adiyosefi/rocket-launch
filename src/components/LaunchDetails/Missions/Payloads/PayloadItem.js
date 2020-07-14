import React from 'react';

const PayloadItem = ({ name }) => {
    return (
        <div>
            <div className="payload-name">
                <i className="fa fa-minus" aria-hidden="true"></i>&nbsp; {name}
            </div>
        </div>
    );
};

export default PayloadItem;