import React from 'react';
import PayloadItem from "./PayloadItem";

const PayloadsList = ({ payloads }) => {
    const payloadsList = payloads.map((payload) =>
        <li key={payload.id} className="payload-item">
            <PayloadItem name={payload.name} />
        </li>
    )

    return (
        <div>
            <h4>Payloads</h4>
            <ul>
                {payloadsList}
            </ul>
        </div>
    );
};

export default PayloadsList;