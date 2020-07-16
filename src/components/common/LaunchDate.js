import React from 'react';
import moment from "moment";
import '../LaunchDetails/LaunchDetails.scss';

const LaunchDate = ( { label, date } ) => {
    const launchFormatDate = moment(date).format(
        "dddd, MMMM Do YYYY, h:mm:ss a"
    );

    return (
        <>
          <span>{label}:</span> {launchFormatDate}
        </>
    );
};

export default LaunchDate;