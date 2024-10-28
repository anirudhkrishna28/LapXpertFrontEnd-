import React from 'react';
import OwnerApp from './owner/OwnerApp';

const Choose = () => {

    return (
        <div>
            <div onClick={OwnerApp}>User Login</div>
            <div onClick={OwnerApp}>Owner Login</div>
        </div>
    );
};

export default Choose;