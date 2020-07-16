import React from "react";

const ErrorReason = ({ label, reason }) => (
    <div className={`launch-${label}-reason`}>
        <span>{label} reason:</span> {reason}
    </div>
);

export default ErrorReason;