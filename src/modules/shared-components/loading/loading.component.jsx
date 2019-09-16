import React from 'react';

import './loading.component.sass'

const LoadingComponent = () => {

    return (   
        <div className="loading">
            <span className="loading-bar bg-yellow"></span>
            <span className="loading-bar bg-green"></span>
            <span className="loading-bar bg-pink"></span>
            <span className="loading-bar bg-red"></span>
            <span className="loading-bar bg-blue"></span>
        </div>
    );
}

export default LoadingComponent