import React from 'react';
import moment from "moment";
import '../LaunchDetails/LaunchDetails.scss';

const LaunchDate = ( { label, date } ) => {
    const tempDate = new Date(date);
    const launchFormatDate = moment(tempDate).format(
        "dddd, MMMM Do YYYY, h:mm:ss a"
    );

    return (
        <>
          <span>{label}:</span> {launchFormatDate}
        </>
    );
};

export default LaunchDate;