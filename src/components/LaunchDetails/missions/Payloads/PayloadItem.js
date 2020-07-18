import React from "react";

const PayloadItem = ({ name }) => (
    <div>
        <div className="payload-name">
            <i className="fa fa-minus" aria-hidden="true"/>&nbsp; {name}
        </div>
    </div>
);

export default PayloadItem;