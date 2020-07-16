import React from 'react';
import './Tag.scss';

const Tag = ({ label }) =>
    <div className="label">
        <span className={label}>{label}</span>
    </div>

export default Tag;