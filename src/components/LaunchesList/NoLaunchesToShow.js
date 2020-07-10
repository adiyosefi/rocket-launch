import React from 'react';
import Loading from "../Loading/Loading";

const NoLaunchesToShow = ({error}) => {
    return (
        <div className="no-launches-content">
        {error ?
                "No launches to show..."
                : <Loading />}
        </div>
    );
};

export default NoLaunchesToShow;